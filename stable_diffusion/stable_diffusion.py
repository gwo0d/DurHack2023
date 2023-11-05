import requests
import json
import base64

if __name__ == "__main__":
    url = "http://127.0.0.1:7861/sdapi/v1/txt2img"
    payload = {
    "prompt": "Scene from Monty Python in color. The script is about a new series of half-hour situation comedies that will be returning to BBC TV. The first episode, 'Dad's Doctor', stars Ronnie Thompson and is about the daffy exploits of the RAMC training school. The second episode, 'Dad's Pooves', is about the wacky exploits of an odd couple.",
    "steps": 20
    }


    response = requests.post(url=url, json=payload).json()
    with open("out.png", "wb") as f:
        f.write(base64.b64decode(response["images"][0]))