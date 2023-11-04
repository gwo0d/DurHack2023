import re

speaker : str = ""
text : str = ""
script_input : str = ""
output : str = ""
file_name : str = ""

file_name = input("Enter a filepath to convert:")

script_input_name = str(file_name)
script_output_name = str(file_name + "_strip.txt")

speaker_pattern = r'(?<=")(.*?)(?=:)'
text_pattern = r'(?<=:)(.*?)(?=(",))'

with open(script_input_name, 'r') as f:
    for line in f.readlines():
        l = line.strip().split(chr(13))
        speaker_data = str(re.findall(speaker_pattern, str(l)))
        text_data = str(re.findall(text_pattern, str(l)))
        ## Format data and make sure weird brackets etc get removed
        speaker_data = speaker_data.strip("[]()'\",")
        if speaker_data.__contains__("sketch"):
            print("Nope")
            break
        text_data = text_data.strip("[]()'\",")
        if len(speaker_data) > 2:
            output += speaker_data.upper() + chr(13)
        if len(text_data) > 2:
            output += text_data + chr(13) + chr(13)
f.close()

f = open(script_output_name, "a")
f.write(output)
f.close()