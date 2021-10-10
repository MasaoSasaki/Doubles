#!/bin/bash

aws lambda update-function-code --function-name test_lambda --zip-file fileb://lambda_function.py.zip --region ap-northeast-3
