from django.shortcuts import render
from django.views.generic.base import View
from django.http import HttpResponse, HttpResponseRedirect

import json
import datetime

# Create your views here.

class ReadFromJson(View):
    """read from json"""
    def get(self, request):
        """read from a json file and return a json to Ajax"""
        time = request.GET.get("time","")
        if time == "" :
            return HttpResponse("please input time and refresh the page")
        else:
            f = open(r"D:\DjangoDemo\DjangoDemo\Django_sample_readjson\json.txt")
            json_data = "".join(f.readlines()).replace("\n","")
            json_data = json.loads(json_data)
            data = []
            if time == 'day':
                for row in json_data:
                    time = row['date']
                    d1 = datetime.datetime.strptime(time, '%b %d, %Y %H:%M:%S')
                    d2 = datetime.datetime.now()
                    if (d2 - d1).days <= 1:
                        data.append(row)
            elif time == 'week':
                for row in json_data:
                    time = row['date']
                    d1 = datetime.datetime.strptime(time, '%b %d, %Y %H:%M:%S')
                    d2 = datetime.datetime.now()
                    if (d2 - d1).days <= 7:
                        data.append(row)
            elif time == 'month':
                for row in json_data:
                    time = row['date']
                    d1 = datetime.datetime.strptime(time, '%b %d, %Y %H:%M:%S')
                    d2 = datetime.datetime.now()
                    print((d2 - d1).days)
                    if (d2 - d1).days <= 30:
                        data.append(row)
            response =  HttpResponse(json.dumps(data), content_type="application/json")
            response["Access-Control-Allow-Origin"] = "*"
            response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
            response["Access-Control-Max-Age"] = "1000"
            response["Access-Control-Allow-Headers"] = "*"
            return response
