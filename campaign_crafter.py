import yaml
from collections import namedtuple, defaultdict, OrderedDict
from heapq import heappop, heappush, heapify
from math import inf
import copy

event_Cap = 5
Event = namedtuple('Event', ['name', 'check', 'effect', 'value'])


class Party_State(OrderedDict):

    def __key(self):
        return tuple(list(self.items()))

    def __hash__(self):
        return hash(self.__key())

    def __lt__(self, other):
        return self.__key() > other.__key()

#takes all the components in party state and consolidates them into a single list for comparison
def mega_list(Party_State):
    s_m_l = []
    for group in Party_State:
        s_m_l += Party_State[group]
    return s_m_l


def make_checker(rule):
    # Implement a function that returns a function to determine whether a state meets a
    # rule's requirements. This code runs once, when the rules are constructed before
    # the search is attempted.

    def check(state):
        # This code is called by graph(state) and runs millions of times.
        # Tip: Do something with rule['Consumes'] and rule['Requires'].
        condition = True
        state_mega_list = mega_list(state)
        for r in rule:
            if r == 'reqs':
                for component in rule[r]:
                    if component not in state_mega_list:
                        condition = False

        return condition

    return check


def make_effector(rule):
    # Implement a function that returns a function which transitions from state to
    # new_state given the rule. This code runs once, when the rules are constructed
    # before the search is attempted.

    def effect(state):
        # This code is called by graph(state) and runs millions of times
        next_state = copy.deepcopy(state)
        print("1.a:", state)
        print("1.b:", next_state)
        for r in rule:
            if r == 'results':
                for result in rule[r]:
                    print(result)
                    if result not in next_state['catalog']:
                        next_state['catalog'].append(result)

        print("2.a:", state)
        print("2.b:", next_state)

        return next_state

    return effect


def make_goal_checker(goal):
    # Implement a function that returns a function which checks if the state has
    # met the goal criteria. This code runs once, before the search is attempted.

    def is_goal(state):
        # This code is used in the search process and may be called millions of times.
        condition = True
        state_mega_list = mega_list(state)

        for g in goal:
            if g not in state_mega_list:
                condition = False

        return condition

    return is_goal


def make_heuristic_calculator(rule, goal):

    def auto_heuristic(state):
        heuristic_value = 0
        state_mega_list = mega_list(state)
        for r in rule:
            if r == 'reqs':
                for component in rule[r]:
                    if component in goal:
                        heuristic_value += 1


        return heuristic_value

    return auto_heuristic

def graph(state):
    # Iterates through all recipes/rules, checking which are valid in the given state.
    # If a rule is valid, it returns the rule's name, the resulting state after application
    # to the given state, and the cost for the rule.
    for r in all_events:
        if r.check(state):
            yield (r.name, r.effect(state), r.value(state))


def heuristic(previous_state, action_taken, goals):
    heuristic_value = 0
    state_mega_list = mega_list(previous_state)
    ##print("previous state", previous_state)
    ##print("action taken", action_taken)
    for goal in goals:
        if goal in state_mega_list:
            heuristic_value += 1
    return heuristic_value


def search(graph, state, is_goal, limit, heuristic):
    number_of_state_visits = 0

    # The priority queue
    queue = [(0,state)]
    heapify(queue)
    goals = event_Crafting["Goals"]

    # The dictionary that will be returned with the event lengths
    length_costs = {}
    length_costs[tuple(mega_list(state))] = 0

    # The dictionary that will store the backpointers
    backpointers = {}
    backpointers[tuple(mega_list(state))] = None

    iterations_at_best_result = 0
    best_result_so_far = None

    # Implement your search here! Use your heuristic here!
    # When you find a path to the goal return a list of tuples [(state, action)]
    # representing the path. Each element (tuple) of the list represents a state
    # in the path and the action that took you to this state
    while queue:
        print("queue at start of loop:", queue)
        current_heuristic_cost, current_state = heappop(queue)
        if is_goal(current_state):
            print("Solution found")
            if best_result_so_far != None:
                print(tuple(mega_list(best_result_so_far)))
                print(tuple(mega_list(current_state)))
                if length_costs[tuple(mega_list(best_result_so_far))] < length_costs[tuple(mega_list(current_state))] \
                        < event_Cap:
                    best_result_so_far = current_state
                    iterations_at_best_result = number_of_state_visits
            else:
                best_result_so_far = current_state
                iterations_at_best_result = number_of_state_visits

        graph_valid_actions = graph(current_state)

        for gva in graph_valid_actions:
            number_of_state_visits += 1
            print("GVA START", number_of_state_visits)
            print(gva)
            heuristic_value = heuristic(current_state, gva, goals)
            new_heuristic_cost = current_heuristic_cost + gva[2] + heuristic_value

            print("length", length_costs)
            if tuple(mega_list(gva[1])) not in length_costs:
                length_costs[tuple(mega_list(gva[1]))] = length_costs[tuple(mega_list(current_state))] + 1
                backpointers[tuple(mega_list(gva[1]))] = current_state
                heapify(queue)
                heappush(queue,(new_heuristic_cost , gva[1]))
                print("QUEUE:", queue)
            print("GVA END", number_of_state_visits)

    if best_result_so_far and is_goal(best_result_so_far):
        print("Goal reached")
        print("Final state: ", best_result_so_far)
        print("Final Length: ", length_costs[tuple(mega_list(best_result_so_far))])
        print("Number of State Visits at best solution found: ", iterations_at_best_result)

        while backpointers[tuple(mega_list(best_result_so_far))] != None:
            print("Path: ", tuple(mega_list(best_result_so_far)))
            best_result_so_far = backpointers[tuple(mega_list(best_result_so_far))]
                # print("Iterations: ", iterations)
        return None

    # Failed to find a path
    print("Number of states searched ", number_of_state_visits)
    print("Failed to find a path from", state, 'within time limit.')
    return None


if __name__ == '__main__':
    with open('event_Crafting.yaml', 'r') as f:
        event_Crafting = yaml.load(f)

    # List of items that can be in your inventory:
    #print('All Locations:', event_Crafting['Location'])

    # List of items in your initial inventory with amounts:
    #print('Initial Party State:', event_Crafting['Party_State'])

    # Dict of crafting recipes (each is a dict):
    ## print('Example event:','Gossip at the bar for rumors ->', event_Crafting['Event']['Gossip at the bar for rumors'])
    party_Status = Party_State()
    party_Status = event_Crafting['Party_State']

    # Create a function which checks for the goal
    goals = event_Crafting['Goals']
    is_goal = make_goal_checker(goals)
    print("goals", goals)

    # Build rules
    all_events = []
    for name, rule in event_Crafting['Event'].items():
        checker = make_checker(rule)
        effector = make_effector(rule)
        heuristic_calc = make_heuristic_calculator(rule, goals)
        event = Event(name, checker, effector, heuristic_calc)
        all_events.append(event)

    #sets party_Status to the dictionary of lists defined in yaml
    print("party", party_Status['party'])
    print("location", party_Status['location'])
    print("catalog", party_Status['catalog'])


    # Search for a solution
    resulting_plan = search(graph, party_Status, is_goal, 600, heuristic)

    if resulting_plan:
        # Print resulting plan
        for state, action in resulting_plan:
            print('\t',state)
            print(action)
