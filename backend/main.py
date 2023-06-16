from flask import Flask, jsonify, request
from huggingface_hub
from diffusers import StableDiffusionPipeline
import torch

import random

app = Flask(__name__)

if torch.cuda.is_available(): 
    dev = "cuda:0" 
else: 
    dev = "cpu" 
device = torch.device(dev) 

pipeline = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
pipe = pipeline.to('cuda')

artists = ["Claude Monet", "Auguste Renoir", "Edgar Degas", "Berthe Morisot", "Edouard Manet", "Camille Pissarro", "Mary Cassatt", "Georges Seurat"] # many of the primary impressionist artists + added in Seurat (pointillism) as well

def generate_full_prompt(entry):
  artist = random.choice(artists)
  return entry+" in the style of a "+artist+" painting"

@app.route('/', methods=['GET'])
def test():
    torch.cuda.empty_cache()
    args = request.args
    query = args.get("q")
    image = pipe(generate_full_prompt(query)).images[0]
    image.save('output/generatedimage.png')
    
    return jsonify({'message': 'hopefully created an image!'})