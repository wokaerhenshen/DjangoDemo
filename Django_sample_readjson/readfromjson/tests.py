from django.test import TestCase

# Create your tests here.
import datetime
import json



f = open(r"F:\PythonProject\DailyProjects\Django_sample_readjson\json.txt")
json_data = "".join(f.readlines()).replace("\n","")
json_data = json.loads(json_data)
for row in json_data:
    print(row['date'])
    time = row['date']
    d1 = datetime.datetime.strptime(time, '%b %d, %Y %H:%M:%S')
    print(d1)
    d2 = datetime.datetime.now()
    print((d2 - d1).days)