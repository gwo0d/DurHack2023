from flask import Flask, request, send_from_directory
from stable_diffusion.stable_diffusion import generate_image
from Parsers.Gen_Content import create_script_with_ChatGPT
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
    generate_image(prompt["prompt"], Path(__file__).parent.joinpath("Frontend", "static", "ai.png"))
    return '', 200

@app.route("/script", methods=["POST"])
def script():
    prompt = request.form.to_dict()
    print(prompt)
    text = create_script_with_ChatGPT(prompt["prompt"])
    text = text[8:].replace('\\n', '\n')
    print(text)
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