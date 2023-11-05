# Monty Python's Infinite Circus

A humorous web-project that writes Monty Python-esque scripts and appropriate graphics using various AI tools given a specified prompt.

## Running locally

Clone the repo onto your local machine
In your terminal, run:
1. `python3 -m venv venv`
2. `source venv/bin/activate`
3. `python3 -m pip install requests`
4. `git submodule update --init`
5. Download model.ckpt from https://huggingface.co/darkstorm2150/Protogen_Infinity_Official_Release/tree/main
6. Put the model.ckpt in your `/Monty-Pythons-Infinite-Circus/stable_diffusion_stable-diffusion-webio/models/Stable-diffusion` folder
7. Run `./webui.sh --no-half --nowebui --skip-torch-cuba-test` in your normal terminal, outside of the virtual environment
8. In venv, run `python3 main.py` and you are set to create your Monty Python inspired images!

### Running locally using ChatGPT
Follow the steps as above. However, additionally create the file `Parsers\LLM_config.yaml` which should contain the following data:
```
OPENAI_API_KEY: YOUR-SECRET-API-KEY-HERE
model: gpt-3.5-turbo
temp: 0.6
```
Whilst we recommend the above model and temperature, feel free to tune to your liking.

## Backend tooling

We used a database of Monty Python scripts (https://www.kaggle.com/code/valkling/monty-python-scripts-database-to-text)
to begin training the instance of Vertex - Google's generative AI. A script then parsed each individual json script into 
OpenAI's chatGPT-3.5 turbo for 2 line summaries. These accompany the full scripts which fully train Vertex.

Vertex produces a Monty Python style script from a user specified prompt concurrently whilst the stable-diffusion engine
generates an appropriate Monty Python style image to accompany the script.

## Contributors
- Luke Briggs
- Kalina Hajzner
- Evie Jackson
- George Wood
