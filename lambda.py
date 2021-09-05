# -*- coding: utf-8 -*-
import json
import math
import platform

def lambda_handler(event, context):
  def permutations_count(n, r):
      return math.factorial(n) // math.factorial(n - r)
  def combinations_count(n, r):
      return math.factorial(n) // (math.factorial(n - r) * math.factorial(r))
  factorial = "階乗: " + str(math.factorial(event['n']))
  permutations = "順列: " + str(permutations_count(event['n'], event['r']))
  combinations = "組み合わせ: " + str(combinations_count(event['n'], event['r']))
  print("Received event: " + json.dumps(event, indent=2))
  print(factorial, permutations, combinations)
  return factorial, permutations, combinations

if platform.system() == "Darwin":
  event = {
    "n": 5,
    "r": 3
  }
  lambda_handler(event, 0)
