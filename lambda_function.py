# -*- coding: utf-8 -*-
import json
import math
import platform
import random
import itertools
import pprint
import random
import copy

def lambda_handler(event, context):
  n = event['n']
  r = event['r']

# 関数宣言----------------------------------------------------
  # 順列
  def permutations_count(n, r):
    return math.factorial(n) // math.factorial(n - r)
  # 組み合わせ
  def combinations_count(n, r):
    return math.factorial(n) // (math.factorial(n - r) * math.factorial(r))
  # ダブルスの組み合わせ数
  def get_doubles_count(n):
    return int(combinations_count(n, 2) * combinations_count(n - 2, 2) / 2)

  # 配列を辞書型に変換
  def change_array_to_dictionary(array):
    dictionary = {
      'pair_a': [], 'pair_b': [],
      'rest_player': []
    }
    dictionary['pair_a'] = array[0:2]
    dictionary['pair_b'] = array[2:4]
    dictionary['rest_player'] = array[4:n]
    return dictionary

  # 重複の判定条件
  def is_duplicate_filter(a, b):
    if a[0:2] == b[0:2] \
    or a[2:4] == b[2:4] \
    or a[0:2] == b[2:4] \
    or a[2:4] == b[0:2] \
    or a[0:2] == list(reversed(b[0:2])) \
    or a[2:4] == list(reversed(b[2:4])) \
    or a[0:2] == list(reversed(b[2:4])) \
    or a[2:4] == list(reversed(b[0:2])):
      return True
    else: return False

  # 全ての順列を作成（重複あり）
  def create_match_list_pattern(n):
    item = 0
    match_list = []
    n_array = list(range(1, n + 1))
    for i, permutation_match in enumerate(itertools.permutations(n_array)):
      permutation_match = list(permutation_match)
      if i == 0:
        match_list.append(permutation_match)
        item += 1
      else:
        for match_item in match_list:
          if is_duplicate_filter(permutation_match, match_item):
            break
        else:
          match_list.append(permutation_match)
          item += 1
    else:
      match_list_dictionary = [change_array_to_dictionary(match_item) for match_item in match_list]
      random.shuffle(match_list_dictionary)
    return match_list_dictionary, item
# 関数宣言----------------------------------------------------

  match_list_pattern = create_match_list_pattern(n)

  pprint.pprint(match_list_pattern)

  factorial = "階乗: " + str(math.factorial(n))
  permutations = "順列: " + str(permutations_count(n, r))
  combinations = "組み合わせ: " + str(combinations_count(n, r))
  doubles_pair = "ダブルス数: " + str(get_doubles_count(n))
  print(factorial, permutations, combinations, '\033[32m'+doubles_pair+'\033[0m')

  return factorial, permutations, combinations

if platform.system() == "Darwin":
  event = {
    "n": 4,
    "r": 3
  }
  lambda_handler(event, 0)
