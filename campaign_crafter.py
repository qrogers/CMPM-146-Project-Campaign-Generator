import yaml
from collections import namedtuple, OrderedDict
from heapq import heappop, heappush, heapify
from math import inf
import copy
import random

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
        for r in rule:
            if r == 'results':
                for result in rule[r]:
                    if result not in next_state['catalog']:
                        next_state['catalog'].append(result)

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


def update_Keys(state, item):
    #Iterates through the state, checking for key events to alter before looking for
    #valid moves. Here is where events diverge
    print("Old:", item)
    state['catalog'].remove(item)

    branches = key_Event_Props[item]
    for branch in key_Event_Props[item]:
        if branch in state['catalog']:
            branches.remove(branch)

    if branches:
        new_Item = random.choice(branches)
    else:
        new_Item = "Not_Valid"

    print("New:", new_Item)
    state['catalog'].append(new_Item)


def heuristic(previous_state, action_taken, goals):
    heuristic_value = 0
    state_mega_list = mega_list(previous_state)
    for goal in goals:
        if goal in state_mega_list:
            heuristic_value += 1
    return heuristic_value


def search(graph, state, is_goal, limit, heuristic):

    # The priority queue
    # Queue is ordered first by their heuristic value, then by a tuplefied version of the state,
    # and then the actual state used for processing
    queue = [(0,tuple(mega_list(state)), state)]
    heapify(queue)

    # The dictionary that will be returned with the event lengths
    length_costs = {}
    length_costs[tuple(mega_list(state))] = 0

    # The dictionary that will store the backpointers of tuples with names and backspoints
    backpointers = {}
    backpointers[tuple(mega_list(state))] = ("Start", None)

    number_of_state_visits = 0
    iterations_at_best_result = 0
    best_result_so_far = None
    event_Cap_Satisfaction = False
    graph_number = 0
    # Implement your search here! Use your heuristic here!
    # When you find a path to the goal return a list of tuples [(state, action)]
    # representing the path. Each element (tuple) of the list represents a state
    # in the path and the action that took you to this state
    while queue:
        current_heuristic_cost, reference_state, current_state = heappop(queue)
        print("Current State:", current_state)
        # Iterates through party state looking for key_event_properties

        # Checks to see if the state matches goal criteria
        if is_goal(current_state):
            print("Solution found")
            if best_result_so_far != None:
                print(tuple(mega_list(best_result_so_far)))
                print(tuple(mega_list(current_state)))
                if length_costs[tuple(mega_list(best_result_so_far))] < length_costs[tuple(mega_list(current_state))]:
                    best_result_so_far = current_state
                    iterations_at_best_result = number_of_state_visits
            else:
                best_result_so_far = current_state
                iterations_at_best_result = number_of_state_visits
            if (length_costs[tuple(mega_list(best_result_so_far))] == event_Cap):
                event_Cap_Satisfaction = True

        # Iterates through given party state that contains key_event properties
        graph_number += 1
        print("GVA:", graph_number)
        graph_valid_actions = graph(current_state)

        for gva in graph_valid_actions:
            number_of_state_visits += 1

            #After adding the generic event, selects/randomizes key components
            #print("Pre-Key:", gva[1])
            for item in key_Event_Props:
                if item in mega_list(gva[1]):
                    update_Keys(gva[1], item)
            #print("Post-Key:", gva[1])

            #If a key_component from the results of an event result in no new components, don't add to queue.

            if "Not_Valid" not in gva[1]['catalog']:
                #print("Is_Valid")
                if tuple(mega_list(gva[1])) not in length_costs:
                    length_costs[tuple(mega_list(gva[1]))] = length_costs[tuple(mega_list(current_state))] + 1
                    backpointers[tuple(mega_list(gva[1]))] = (gva[0] , current_state)
                    heuristic_value = heuristic(current_state, gva, goals)

                    new_heuristic_cost = current_heuristic_cost + gva[2] + heuristic_value
                    heapify(queue)
                    heappush(queue,(new_heuristic_cost, tuple(mega_list(gva[1])), gva[1]))


    if best_result_so_far and is_goal(best_result_so_far):
        print("Goal reached")
        print("Final state: ", best_result_so_far)
        print("Final Length: ", length_costs[tuple(mega_list(best_result_so_far))])
        print("Campaign Length Satisfaction: ", event_Cap_Satisfaction)
        print("Number of State Visits at best solution found: ", iterations_at_best_result)
        return_path = []
        while backpointers[tuple(mega_list(best_result_so_far))][1] != None:
            return_path.append(backpointers[tuple(mega_list(best_result_so_far))])
            best_result_so_far = backpointers[tuple(mega_list(best_result_so_far))][1]

        return return_path

    # Failed to find a path
    print("Number of states searched ", number_of_state_visits)
    print("Failed to find a path from", state, 'within time limit.')
    return None


if __name__ == '__main__':
    with open('event_Crafting.yaml', 'r') as f:
        event_Crafting = yaml.load(f)

    party_Status = Party_State()
    party_Status = event_Crafting['Party_State']

    # Create a function which checks for the goal
    goals = event_Crafting['Goals']
    key_Event_Props = event_Crafting["Key_Event_Properties"]
    is_goal = make_goal_checker(goals)
    print("Goals:", goals)

    # Build rules for events and special events
    all_events = []
    for name, rule in event_Crafting['Event'].items():
        checker = make_checker(rule)
        effector = make_effector(rule)
        heuristic_calc = make_heuristic_calculator(rule, goals)
        event = Event(name, checker, effector, heuristic_calc)
        print(event)
        all_events.append(event)

    #Print's the current Party Status
    print("Party: ", party_Status['party'])
    print("Location: ", party_Status['location'])
    print("Catalog: ", party_Status['catalog'], '\n')


    # Search for a solution
    resulting_plan = search(graph, party_Status, is_goal, 600, heuristic)

    # Prints out the solution
    if resulting_plan:
        resulting_plan.reverse()
        print("Resulting set of events:", '\n')
        print("START")
        for action, state in resulting_plan:
            print("State: ", state)
            print("Action: ", action, '\n')
