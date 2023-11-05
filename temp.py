import json

with open("training_data/data/Bruces.txt") as f:
    text = f.read()
    lines = text.split("\n\n")
    response = {"response":[]}
    for line in lines:
        print(line)
        try:
            speaker, dialogue = line.split("\n")
            response["response"].append([speaker, dialogue])
        except ValueError:
            pass
    print(json.dumps(response))