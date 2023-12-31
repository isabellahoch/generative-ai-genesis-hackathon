from flask import Flask, jsonify, request
from flask_cors import CORS

import requests
import random
import os

import io
from PIL import Image

import base64
from dotenv import load_dotenv

from diffusers import StableDiffusionPipeline
import torch

import random

load_dotenv()

app = Flask(__name__)
CORS(app)

artists = ["Claude Monet", "Auguste Renoir", "Edgar Degas", "Berthe Morisot", "Edouard Manet", "Camille Pissarro", "Mary Cassatt", "Georges Seurat"] # many of the primary impressionist artists + added in Seurat (pointillism) as well

def get_random_artist():
    return random.choice(artists)

def generate_full_prompt(entry, artist):
  return entry+" in the style of a "+artist+" painting"

def huggingface_query(payload, headers, url):
	response = requests.post(url, headers=headers, json=payload)
	return response.content

@app.route('/', methods=['GET'])
def main_endpoint():
    args = request.args
    query = args.get("q")
    artist = get_random_artist()
    prompt = generate_full_prompt(query, artist)
    if query is None or query == '':
        query='question mark on the beach' # file not found / empty query failsafe
    if torch.cuda.is_available():
        pipeline = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
        pipe = pipeline.to('cuda')
        torch.cuda.empty_cache()
        image = pipe(prompt).images[0]
        return image
    else:
        headers = {"Authorization": "Bearer "+os.environ.get("BEARER_TOKEN")}
        image_bytes = huggingface_query({
            "inputs": prompt,
        }, headers, "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5")
        if(image_bytes is None): 
            return None
        return base64.b64encode(image_bytes)

@app.route('/<artist_name>', methods=['GET'])
def create(artist_name=None):
    args = request.args
    query = args.get("q")
    if(artist_name is not None):
        artist = artist_name
    else:
        artist = get_random_artist()
    prompt = generate_full_prompt(query, artist)
    if query is None or query == '':
        query='question mark on the beach' # file not found / empty query failsafe
    if torch.cuda.is_available():
        pipeline = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
        pipe = pipeline.to('cuda')
        torch.cuda.empty_cache()
        image = pipe(prompt).images[0]
        return image
    else:
        headers = {"Authorization": "Bearer "+os.environ.get("BEARER_TOKEN")}
        image_bytes = huggingface_query({
            "inputs": prompt,
        }, headers, "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5")
        if(image_bytes is None): 
            return None
        return base64.b64encode(image_bytes)


app.run(host='0.0.0.0')