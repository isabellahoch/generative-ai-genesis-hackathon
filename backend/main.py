from diffusers import StableDiffusionPipeline
import torch

if torch.cuda.is_available(): 
    dev = "cuda:0" 
else: 
    dev = "cpu" 
device = torch.device(dev) 
a = torch.zeros(4,3) 
a = a.to(device)

pipeline = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
pipe = pipeline.to('cuda')

prompt = "black cat in an orange tree at sunset"
addendum = "in the style of an impressionist painting"
image = pipe(prompt+" "+addendum).images[0]
image.save('output/generatedimage.png')