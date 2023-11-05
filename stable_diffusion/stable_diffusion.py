import requests
import json
import base64

def generate_image(prompt, output_file):
    url = "http://127.0.0.1:7861/sdapi/v1/txt2img"
    payload = {
    "prompt": prompt,
    "steps": 20
    }


    response = requests.post(url=url, json=payload).json()
    with open(output_file, "wb") as f:
        f.write(base64.b64decode(response["images"][0]))