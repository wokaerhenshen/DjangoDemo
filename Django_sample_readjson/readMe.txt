1.If you do not have python:

	download here : https://www.python.org/downloads/windows/

2. If you do not have Django and other packages :

	open cmd in this directory and run : pip install -r requests.txt (This will install all the packages in requests.txt)

3. In this directory, go to readfromjson folder and open views.py

	Change the line 18 code "f = open(r"C:\Users\Karl\Desktop\Django_sample_readjson-20190203T211536Z-001\Django_sample_readjson\json.txt")"

	Change the path inside the method "open" to the absolute path of [this directory] in this computer.(You read the json.txt file by this 	line of code)

4. In this directory, run the following command in command prompt :

	python manage.py runserver

5. in this directory, go to templates folder, double click the index.html and start the program.

6. If you want to switch to another json.txt file, just copy your json.txt file to this directory to overwirte the old one.
