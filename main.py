from flask import Flask, request, send_from_directory
from stable_diffusion.stable_diffusion import generate_image
from pathlib import Path
import json

app = Flask(__name__, static_folder='Frontend/static')

@app.route("/")
def index():
    return send_from_directory("Frontend/static", "main.html")

@app.route("/query", methods=["POST"])
def query():
    prompt = request.form.to_dict()
    print(prompt)
    prompt = f"Live action scene from Monty Python in color. {prompt['prompt']}. The script is a Monty Python sketch and it is full of humor. The scene looks as if it is a low-budget British TV show from the 1970s"
    generate_image(prompt, Path(__file__).parent.joinpath("Frontend", "static", "ai.png"))
    return '', 200

@app.route("/script", methods=["POST"])
def script():
    prompt = request.form.to_dict()
    print(prompt)
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
    print(response)
    response = json.dumps(response)
    
    return response, 200


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=1337)