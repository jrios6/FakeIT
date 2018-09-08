import pandas as pd
import numpy as np

def get_random_headline(filename):
    df = pd.read_csv(filename, index_col='id', dtype = {'title': str, 'label': str})
    random_id = np.random.randint(0, len(df)-1)
    chosen_row = df.loc[random_id]
    headline = chosen_row['headlines']
    label = chosen_row['labels']
    return headline, label
  