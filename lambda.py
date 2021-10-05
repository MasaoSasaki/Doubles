# -*- coding: utf-8 -*-
import json
import math
import platform
import random
import itertools
import pprint

def lambda_handler(event, context):
  # 順列
  def permutations_count(n, r):
    return math.factorial(n) // math.factorial(n - r)
  # 組み合わせ
  def combinations_count(n, r):
    return math.factorial(n) // (math.factorial(n - r) * math.factorial(r))
  # ダブルスの組み合わせ数
  def get_doubles_count(n):
    return int(combinations_count(n, 2) * combinations_count(n - 2, 2) / 2)

  n = event['n']
  r = event['r']
  # match = list(range(1, n + 1))
  # pair_a = []
  # pair_b = []
  rest_player = []
  # match_list = [[]] * 3
  match_list = []
  # match_list = [{}] * permutations_count(n, n)
  # print(len(match_list))
  # print(match)
  def create_match_list_pattern(n):
    n_array = list(range(1, n + 1))
    print('n_array', n_array)
    for _, permutation_match in enumerate(itertools.permutations(n_array)):
      permutation_match = list(permutation_match)
      match = {
        'pair_a': [], 'pair_b': [],
        'rest_player': []
      }

      match['pair_a'] = permutation_match[0:2]
      match['pair_b'] = permutation_match[2:4]
      match_list.append(match)

    return match_list

  match_list_pattern = create_match_list_pattern(n)
  pprint.pprint(match_list_pattern)


  
  # def delete_duplicate_pattern():
  #   print()


  def createMatches(n):
    # pair_a.append(random.randint(1, n))
    # second_player = random.randint(1, n)
    # print(second_player, pair_a)
    # pair_a.append(second_player) if second_player in pair_a else

    # print (PairA)
    # print(len(match_list))
    # match_list = [random.sample(match, len(match)) for _ in range(get_doubles_count(n))]
    for i, _ in enumerate(range(get_doubles_count(n))):
      random_sample = random.sample(match, len(match))
      if len(match_list[0]) == 0:
        match_list[i] = random_sample
        print(i, random_sample, '\033[34m'+"unique"+'\033[0m')
        continue
      else:
        for match_item in match_list:
          if match_item == random_sample:
            print(i, random_sample, '\033[31m'+"duplicate"+'\033[0m')
            # i = i - 1
          else:
            print(i, random_sample, '\033[34m'+"unique"+'\033[0m')
            match_list[i] = random_sample

          # print(match_item[0:2])
          # for players in match_item:
            # print(players)

      # match_list[i] = random_sample
      # print(match_list[i])

    print("result:", match_list)
    # while len(match_list) < 3:
    #   random.shuffle(match)
    #   match_list.append(match)
    #   # match_list[i] = match_item
    # print(match_list)
    return


  # createMatches(n)


  factorial = "階乗: " + str(math.factorial(event['n']))
  permutations = "順列: " + str(permutations_count(event['n'], event['r']))
  combinations = "組み合わせ: " + str(combinations_count(event['n'], event['r']))
  doubles_pair = "ダブルス数: " + str(int(combinations_count(n, 2) * combinations_count(n - 2, 2) / 2))
  # print("Received event: " + json.dumps(event, indent=2))
  print(factorial, permutations, combinations, '\033[32m'+doubles_pair+'\033[0m')
  # print(random.randint(0, 10))

  return factorial, permutations, combinations





if platform.system() == "Darwin":
  event = {
    "n": 4,
    "r": 3
  }
  lambda_handler(event, 0)
