import yaml
import json
from collections import namedtuple, defaultdict, OrderedDict
from timeit import default_timer as time
from heapq import heappop, heappush
from math import inf

event_Cap = 5
Event = namedtuple('Event', ['name', 'check', 'effect'])


class Party_State(dict):

    def __key(self):
        return tuple(list(self.items()))

    def __hash__(self):
        return hash(self.items())

    def copy(self):
        new_state = Party_State()
        new_state.update(self)
        return new_state


def make_checker(rule):
    # Implement a function that returns a function to determine whether a state meets a
    # rule's requirements. This code runs once, when the rules are constructed before
    # the search is attempted.

    def check(state):
        # This code is called by graph(state) and runs millions of times.
        # Tip: Do something with rule['Consumes'] and rule['Requires'].
        condition = False
        state_mega_list = state['party'] + state['catalog'] + state['location']
        for r in rule:
            if r == 'reqs':
                for item in rule[r]:
                    if item in state_mega_list:
                        condition = True

        return condition

    return check


def make_effector(rule):
    # Implement a function that returns a function which transitions from state to
    # new_state given the rule. This code runs once, when the rules are constructed
    # before the search is attempted.

    def effect(state):
        # This code is called by graph(state) and runs millions of times
        next_state = state.copy()

        for r in rule:
            if r == 'results':
                for component in rule[r]:
                    next_state['catalog'].append(component)

        return next_state

    return effect


def make_goal_checker(goal):
    # Implement a function that returns a function which checks if the state has
    # met the goal criteria. This code runs once, before the search is attempted.

    def is_goal(state):
        # This code is used in the search process and may be called millions of times.
        condition = True
        state_mega_list = state['party'] + state['catalog'] + state['location']
        for g in goal:
            if g not in state_mega_list:
                condition = False

        return condition

    return is_goal


def graph(state):
    # Iterates through all recipes/rules, checking which are valid in the given state.
    # If a rule is valid, it returns the rule's name, the resulting state after application
    # to the given state, and the cost for the rule.
    for r in all_events:
        if r.check(state):
            yield (r.name, r.effect(state))


def heuristic(state):
    # Implement your heuristic here!
    return 0


def search(graph, state, is_goal, limit, heuristic):
    number_of_state_visits = 0
    goals = event_Crafting['Goals']

    # The priority queue
    queue = [state]
    print(state)

    # The dictionary that will be returned with heuristic costs
    length_costs = {}
    length_costs[tuple(state)] = 0

    # The dictionary that will store the backpointers
    backpointers = {}
    backpointers[tuple(state)] = None

    iterations_at_best_result = 0
    best_result_so_far = None

    # Implement your search here! Use your heuristic here!
    # When you find a path to the goal return a list of tuples [(state, action)]
    # representing the path. Each element (tuple) of the list represents a state
    # in the path and the action that took you to this state
    while queue:
        current_state = heappop(queue)
        if is_goal(current_state):
            print("Solution found")
            if best_result_so_far != None:
                if length_costs[best_result_so_far] < length_costs[current_state] < event_Cap:
                    best_result_so_far = current_state
                    iterations_at_best_result = number_of_state_visits
            else:
                best_result_so_far = current_state
                iterations_at_best_result = number_of_state_visits

        graph_valid_actions = graph(current_state)
        for gva in graph_valid_actions:
            number_of_state_visits += 1
            print("reached")
            #heuristic_value = heuristic(current_state, gva, goals)
            #new_heuristic_cost = current_heuristic_cost + gva[2] + heuristic_value

            # print("Heuristic Generated: ", heuristic_value, "\n")

            if tuple(gva[1]) not in length_costs:
                backpointers[tuple(gva[1])] = current_state
                heappush(queue, tuple(gva[1]))

        if best_result_so_far and is_goal(best_result_so_far):
            print("Goal reached")
            print("Final state: ", best_result_so_far)
            print("Final Length: ", length_costs[tuple(best_result_so_far)])
            print("Number of State Visits at best solution found: ", iterations_at_best_result)

            while backpointers[best_result_so_far] != None:
                print("Path: ", backpointers[best_result_so_far])
                best_result_so_far = backpointers[best_result_so_far]
            # print("Iterations: ", iterations)

            return None
        else:
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
    print('Initial Party State:', event_Crafting['Party_State'])

    # Dict of crafting recipes (each is a dict):
    print('Example event:','Gossip at the bar for rumors ->', event_Crafting['Event']['Gossip at the bar for rumors'])

    # Build rules
    all_events = []
    for name, rule in event_Crafting['Event'].items():
        checker = make_checker(rule)
        effector = make_effector(rule)
        event = Event(name, checker, effector)
        all_events.append(event)

    #sets party_Status to the dictionary of lists defined in yaml
    party_Status = Party_State()
    party_Status = event_Crafting['Party_State']
    print("party", party_Status['party'])
    print("location", party_Status['location'])
    print("catalog", party_Status['catalog'])

    # Create a function which checks for the goal
    is_goal = make_goal_checker(event_Crafting['Goals'])


    # Search for a solution
    resulting_plan = search(graph, party_Status, is_goal, 600, heuristic)

    if resulting_plan:
        # Print resulting plan
        for state, action in resulting_plan:
            print('\t',state)
            print(action)
