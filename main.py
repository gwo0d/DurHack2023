from flask import Flask
from flask import send_from_directory

app = Flask(__name__, static_folder='Frontend/static')

@app.route("/")
def index():
    return send_from_directory("Frontend/static", "main.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=1337)