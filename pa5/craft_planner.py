import json
from collections import namedtuple, defaultdict, OrderedDict
from timeit import default_timer as time
from heapq import heappop, heappush
from math import inf

Recipe = namedtuple('Recipe', ['name', 'check', 'effect', 'cost'])


class State(OrderedDict):
    """ This class is a thin wrapper around an OrderedDict, which is simply a dictionary which keeps the order in
        which elements are added (for consistent key-value pair comparisons). Here, we have provided functionality
        for hashing, should you need to use a state as a key in another dictionary, e.g. distance[state] = 5. By
        default, dictionaries are not hashable. Additionally, when the state is converted to a string, it removes
        all items with quantity 0.

        Use of this state representation is optional, should you prefer another.
    """

    def __key(self):
        return tuple(self.items())

    def __hash__(self):
        return hash(self.__key())

    def __lt__(self, other):
        return self.__key() < other.__key()

    def copy(self):
        new_state = State()
        new_state.update(self)
        return new_state

    def __str__(self):
        return str(dict(item for item in self.items() if item[1] > 0))


def make_checker(rule):
    # Implement a function that returns a function to determine whether a state meets a
    # rule's requirements. This code runs once, when the rules are constructed before
    # the search is attempted.

    def check(state):
        # This code is called by graph(state) and runs millions of times.
        # Tip: Do something with rule['Consumes'] and rule['Requires'].

        #print("Rule" + str(rule))

        # variable that says whether you fulfill requirements of the rule
        # we assume it will be true unless we find something that makes it false
        condition = True

        # iterate through the specific elements of the rule
        # for checking, there are two elements we're interested in
        # whether we require an item to perform a rule
        # and whether we consume items to perform a rule
        for r in rule:


            # require an item (such as a crafting bench)
            if r == 'Requires':
                for item in rule[r]:
                    #print("Item Required: ", item, rule[r][item])
                    #print("State has: ", item, state[item])

                    # we only need one of the required items to fulfill the rule
                    # if we do not have one of the required items, we fail the condition for the rule
                    if state[item] < 1:
                        condition = False

            # consumes an item (such as wood)
            if r == 'Consumes':
                for item in rule[r]:
                    #print("Item Consumed: ", item, rule[r][item])
                    #print("State has: ", item, state[item])

                    # we need a certain number of items to fulfill the rule
                    # this amount is specified in the rule itself
                    # if we have less than the specified number of items, we fail the condition
                    if state[item] < rule[r][item]:
                        condition = False

        #print("Rule can be fulfilled: ", condition, "\n")

        return condition

    return check


def make_effector(rule):
    # Implement a function that returns a function which transitions from state to
    # new_state given the rule. This code runs once, when the rules are constructed
    # before the search is attempted.

    def effect(state):
        # This code is called by graph(state) and runs millions of times
        # Tip: Do something with rule['Produces'] and rule['Consumes'].
        next_state = state.copy()

        # iterate through the specific elements of the rule
        # for state change, there are two elements we're interested in
        # we're interested in the number of items a rule consumes (and we deduct that from our pool of items)
        # we're interested in the number of items a rule adds to our inventory (and we add that to our pool of items)
        for r in rule:
            # consumes item from inventory
            if r == 'Consumes':
                for item in rule[r]:
                    # assume that we have it cause we have a checker function
                    # deduct items from our copy of state
                    next_state[item] -= rule[r][item]

            # add item to inventory
            if r == 'Produces':
                for item in rule[r]:
                    # add items to our copy of state
                    next_state[item] += rule[r][item]

        return next_state

    return effect


def make_goal_checker(goal):
    # Implement a function that returns a function which checks if the state has
    # met the goal criteria. This code runs once, before the search is attempted.

    def is_goal(state):
        # This code is used in the search process and may be called millions of times.
        #print("Goal: ", goal)

        # here, we're just checking whether we possess all the items to fulfill our original goal
        # assume that we fulfill our goal until we find proof that we haven't
        condition = True

        for g in goal:
            # print("Item goal: ", g, goal[g])
            # print("State: ", g, state[g])

            # check if state has the items we have set in goal
            # if we have less than the specified amount, we fail the condition
            if state[g] < goal[g]:
                condition = False

        return condition

    return is_goal


def graph(state):
    # Iterates through all recipes/rules, checking which are valid in the given state.
    # If a rule is valid, it returns the rule's name, the resulting state after application
    # to the given state, and the cost for the rule.
    for r in all_recipes:
        if r.check(state):
            yield (r.name, r.effect(state), r.cost)


# method that takes a single item and breaks it down to its next tier of components
# only takes into account what items are "consumed" when an item is formed and not what is "required"
# returns a dictionary that contains what materials are consumed
def get_materials_list(item_name):
    consumed_materials = {}

    # find recipes that produce the item
    recipes_that_produce_item = [x for x in Crafting['Recipes'] if item_name in Crafting['Recipes'][x]['Produces']]

    # for every recipe that produces the item
    # add to the consumed_materials dictionary what materials can be used to make the item
    for rtpi in recipes_that_produce_item:
        actual_rule = Crafting['Recipes'][rtpi]
        if 'Consumes' in actual_rule:
            amount_produced = actual_rule['Produces'][list(actual_rule['Produces'].keys())[0]]
            x = actual_rule['Consumes'].copy()
            for y in x:
                x[y] = x[y]/amount_produced

            consumed_materials.update(x)
    return consumed_materials


# method that takes in a state and a dictionary made up of booleans for tools
# recursively goes through the state to find out what tools you'll need to make this state happen
# does not return anything. instead it modifies the original tool_requirements dictionary you feed into it
def get_tool_requirements(goal_state, tool_requirements):
    for item in goal_state:
        recipes_that_produce_item = [x for x in Crafting['Recipes'] if item in Crafting['Recipes'][x]['Produces']]

        wood_needed = False
        stone_needed = False

        for rtpi in recipes_that_produce_item:
            actual_rule = Crafting['Recipes'][rtpi]
            if 'Requires' in actual_rule:
                required_item = actual_rule['Requires']

                if 'bench' in required_item:
                    tool_requirements['bench'] = True
                if 'furnace' in required_item:
                    tool_requirements['furnace'] = True
                if 'wooden_pickaxe' in required_item:
                    tool_requirements['wooden_pickaxe'] = True
                    wood_needed = True
                if 'stone_pickaxe' in required_item:
                    stone_needed = True

        if stone_needed == True and wood_needed == False:
            tool_requirements['stone_pickaxe'] = True

        materials = get_materials_list(item)
        if len(materials) != 0:
            get_tool_requirements(materials, tool_requirements)


# method that generates a cost based on a goal, a state, and the item that was recently produced by an action
# if the item produced is inside the goals, returns a low heuristic
# if it does not find the item produced inside the goals, the goals are deconstructed into lower tier materials
# then the method calls itself to see if the item produced in inside the list of lower tier materials
# this process continues until it either finds the item or it runs out of lower tier materials to look at
# at which point, the item is deemed irrelevant and a cost of infinity is returned
def recursive_heuristic(goal_state, previous_state, item_produced):
    remaining_goals = {}
    for gs in goal_state:
        remaining_goals[gs] = goal_state[gs] - previous_state[gs]
        if remaining_goals[gs] <= 0:
            remaining_goals.pop(gs)
    #print("Remaining Goals: ", remaining_goals)

    tools = {'bench',
             'wooden_pickaxe',
             'stone_pickaxe',
             'iron_pickaxe',
             'wooden_axe',
             'stone_axe',
             'iron_axe',
             'furnace'}

    if item_produced in tools:
        return 100

    if item_produced in remaining_goals:
        #print("Action is relevant")

        # give higher costs for wood the worse your tools are
        if item_produced == 'wood':
            if previous_state['iron_axe'] > 0:
                return 1
            if previous_state['stone_axe'] > 0:
                return 10
            if previous_state['wooden_axe'] > 0:
                return 100
            else:
                return 1000

        # give higher costs for coal and cobble the worse your tools are
        if item_produced == 'cobble' or item_produced == 'coal' or item_produced == 'ore':
            if previous_state['iron_pickaxe'] > 0:
                return 0
            if previous_state['stone_pickaxe'] > 0:
                return 10
            if previous_state['wooden_pickaxe'] > 0:
                return 100

        # if it's an item that can not be "gathered"
        # always return 0
        return 1
    else:
        # break down the materials to their next state
        materials_for_remaining_goals = {}

        for rg in remaining_goals:
            individual_goal_materials = get_materials_list(rg)

            for igm in individual_goal_materials:
                if igm in materials_for_remaining_goals:
                    materials_for_remaining_goals[igm] += remaining_goals[rg] * individual_goal_materials[igm]
                else:
                    materials_for_remaining_goals[igm] = remaining_goals[rg] * individual_goal_materials[igm]

        #print("Remaining Goals ", remaining_goals, " => ", materials_for_remaining_goals)

        if len(materials_for_remaining_goals) == 0:
            #print("Action is irrelevant")
            return inf
        else:
            cost = recursive_heuristic(materials_for_remaining_goals, previous_state, item_produced)
            return cost


def heuristic(previous_state, action_taken, goals):
    item_produced_rule = Crafting['Recipes'][action_taken[0]]['Produces']
    item_produced = list(item_produced_rule.keys())[0]


    # do not gather wood with inferior axes
    if item_produced == 'wood':
        if previous_state['iron_axe'] > 0 or previous_state['stone_axe'] > 0:
            if action_taken[2] > 1:
                return inf
        if previous_state['wooden_axe'] > 0:
            if action_taken[2] > 2:
                return inf

    # do not gather coal or stone with inferior pickaxes
    if item_produced == 'coal' or item_produced == 'cobble':
        # if you have an iron pickaxe
        if previous_state['iron_pickaxe'] > 0:
            if action_taken[2] > 1:
                return inf
        # if you have a stone pickaxe
        if previous_state['stone_pickaxe'] > 0:
            if action_taken[2] > 2:
                return inf

    # do not gather ore with inferior stone pickaxes
    if item_produced == 'ore':
        if previous_state['iron_pickaxe'] > 0:
            if action_taken[2] > 2:
                return inf

    # do not make duplicate tools
    tools = {'bench',
             'wooden_pickaxe',
             'stone_pickaxe',
             'iron_pickaxe',
             'wooden_axe',
             'stone_axe',
             'iron_axe',
             'furnace'}

    if item_produced in tools:
        if previous_state[item_produced] > 0 and (item_produced not in goals or goals[item_produced] <= 1):
            #print("Duplicate tool being made")
            return inf

    cost = recursive_heuristic(goals, previous_state, item_produced)
    return cost


def search(graph, state, is_goal, limit, heuristic):
    start_time = time()
    number_of_state_visits = 0

    # define what our goals are
    goals = Crafting["Goal"]

    # get a list of tools we need to finish our goal
    tool_requirements = {}
    tools = {'bench',
             'wooden_pickaxe',
             'stone_pickaxe',
             'furnace'}
    for t in tools:
        tool_requirements[t] = False

    get_tool_requirements(Crafting['Goal'], tool_requirements)
    # print("Tool Requirements: ", tool_requirements)

    # once we have a list of tools we need to finish our goal, add that to our goal
    for tr in tool_requirements:
        if tool_requirements[tr]:
            if tr not in goals:
                goals[tr] = 1

    print("New Goals: ", goals)

    # The priority queue
    queue = [(0, state)]
    print(state)
    # The dictionary that will be returned with the costs
    time_costs = {}
    time_costs[state] = 0

    # The dictionary that will be returned with heuristic costs
    length_costs = {}
    length_costs[state] = 0

    # The dictionary that will store the backpointers
    backpointers = {}
    backpointers[state] = None

    iterations_at_best_result = 0
    best_result_so_far = None

    # Implement your search here! Use your heuristic here!
    # When you find a path to the goal return a list of tuples [(state, action)]
    # representing the path. Each element (tuple) of the list represents a state
    # in the path and the action that took you to this state
    while time() - start_time < limit:
        #iterations += 1

        # generate a list of valid actions we can take
        current_heuristic_cost, current_state = heappop(queue)

        if is_goal(current_state):
            print("Solution found on ", time() - start_time, " | Number of states searched ",  number_of_state_visits)
            if best_result_so_far != None:
                if time_costs[current_state] < time_costs[best_result_so_far]:
                    best_result_so_far = current_state
                    iterations_at_best_result = number_of_state_visits
            else:
                best_result_so_far = current_state
                iterations_at_best_result = number_of_state_visits

        graph_valid_actions = graph(current_state)

        for gva in graph_valid_actions:
            total_cost = time_costs[current_state] + gva[2]
            number_of_state_visits += 1
            #print(current_heuristic_cost, " Action Tried: ", gva[0], " | State: ", current_state)

            heuristic_value = heuristic(current_state, gva, goals)
            new_heuristic_cost = current_heuristic_cost + gva[2] + heuristic_value

            #print("Heuristic Generated: ", heuristic_value, "\n")

            if gva[1] not in time_costs or total_cost < time_costs[gva[1]]:
                length_costs[gva[1]] = length_costs[current_state] + 1
                time_costs[gva[1]] = total_cost
                backpointers[gva[1]] = current_state
                heappush(queue, (new_heuristic_cost, gva[1]))

    if best_result_so_far and is_goal(best_result_so_far):
        print("Goal reached")
        print("Final state: ", best_result_so_far)
        print("Final Cost: ", time_costs[best_result_so_far])
        print("Final Length: ", length_costs[best_result_so_far])
        print("Number of State Visits at best solution found: ", iterations_at_best_result)

        while backpointers[best_result_so_far] != None:
            print("Path: ", backpointers[best_result_so_far])
            best_result_so_far = backpointers[best_result_so_far]
        #print("Iterations: ", iterations)

        return None
    else:
        # Failed to find a path
        print(time() - start_time, 'seconds.', " Number of states searched ", number_of_state_visits)
        print("Failed to find a path from", state, 'within time limit.')
        return None


def example_action(graph, state):
    # print lines to understand what's going on with these variables
    for g in graph(state):
        print("Graph (Valid Action): ", g)
    print("State: ", state)

    # how to act on a state
    # grab some rule for recipes
    for r in all_recipes:
        # r[0] is the name of the rule in all recipes
        # try to find an r with the name of the rule you want
        if r[0] == 'punch for wood':
            break

    # check if the rule can be done
    # you don't have to check if the rule can be done if it shows up in graph
    # everything in graph should already be a valid action
    if r.check(state):
        # perform the rule
        state = r.effect(state)

    print("State: ", state)

if __name__ == '__main__':
    with open('Crafting.json') as f:
        Crafting = json.load(f)

    # List of items that can be in your inventory:
    print('All items:', Crafting['Items'])

    # List of items in your initial inventory with amounts:
    print('Initial inventory:', Crafting['Initial'])

    # List of items needed to be in your inventory at the end of the plan:
    print('Goal:',Crafting['Goal'])

    # Dict of crafting recipes (each is a dict):
    print('Example recipe:','craft stone_pickaxe at bench ->',Crafting['Recipes']['craft stone_pickaxe at bench'])

    state = State({key: 0 for key in Crafting['Items']})
    state.update(Crafting['Initial'])
    print(state)

    # Build rules
    all_recipes = []
    for name, rule in Crafting['Recipes'].items():
        checker = make_checker(rule)
        effector = make_effector(rule)
        recipe = Recipe(name, checker, effector, rule['Time'])
        all_recipes.append(recipe)

    # Create a function which checks for the goal
    is_goal = make_goal_checker(Crafting['Goal'])

    # Search for a solution
    resulting_plan = search(graph, state, is_goal, 30, heuristic)
    print(resulting_plan)
    if resulting_plan:
        # Print resulting plan
        for state, action in resulting_plan:
            print('\t',state)
            print(action)
