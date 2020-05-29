import numpy as np
import pandas as pd
import os.path
from os import path
import json

def load_samples(filename):
    x = np.load(filename, allow_pickle=True)

    prior_samples = x['prior_samples'].item()
    mcmc_samples = x['mcmc_samples'].item()
    post_pred_samples = x['post_pred_samples'].item()
    forecast_samples = x['forecast_samples'].item()

    return prior_samples, mcmc_samples, post_pred_samples, forecast_samples

datafile_path = "data/data.json"

if path.exists(datafile_path) and os.path.getsize("results/samples/data.json") != 0:
    with open(datafile_path, 'r') as f:
        data = json.load(f)

if type(data) == str:
    data = json.loads(data)

