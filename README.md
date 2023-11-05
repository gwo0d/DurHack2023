# Monty Python's Infinite Circus

A humorous web-project that writes Monty Python-esque scripts and appropriate graphics using various AI tools given a specified prompt.

## Usage

You can view our project at: https://infinitecirc.us
To get started with a local version, run the command ```pip install -r requirements.txt``` followed by ```python3 main.py```

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
