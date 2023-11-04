import json
import re

json_input : str = ""
file_name : str = ""

file_name = input("Enter a filepath to convert:")

script_input_name = str(file_name)
script_output_name = str(file_name + "_strip.txt")

with open(script_input_name, 'r') as f:
    for line in f.readlines():
            json_input += line
f.close()

## do json magic here
data = json.loads(json_input)
print(data['body'])

speaker_pattern = r'(?<=^)(.*: ?)'
text_pattern = r'(?<=:)(.*?)(?=(\',))'
output = ""

for line in data["body"]:
    m = re.match(speaker_pattern, line)
    if m is not None:
        output += m.group().upper() + "\n"
        output += line[m.end():] + "\n" + "\n"
    else:
        print("No Speaker")



f = open(script_output_name, "a")
f.write(output)
f.close()