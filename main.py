from flask import Flask, request, send_from_directory
from stable_diffusion.stable_diffusion import generate_image
from pathlib import Path

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


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=1337)