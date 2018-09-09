import pandas as pd
import numpy as np 

def get_news_df(filename):
    df = pd.read_csv(filename, index_col='uuid', dtype = {'title': str, 'text': str, 'main_img_url': str})
    # filter by title not NA
    df = df.loc[df['title'].notnull()]   
    # filter by title not NA
    df = df.loc[df['text'].notnull()]   
    # filter by image url not NA
    df = df.loc[df['main_img_url'].notnull()]   
    return df

def random_article_by_category(df, category):
    subset = df[df['type'] == category]
    subset_uuids = subset.index
    chosen_uuid = np.random.choice(subset_uuids)
    return get_article_by_uuid(df, chosen_uuid)

def get_article_by_uuid(df, uuid):
    row = df.loc[uuid]
    article = {}
    article['uuid'] = uuid
    article['title'] = row.title
    full_text = row.text
    parts = full_text.split('. ')
    article['text_lower'] = ". ".join(parts[:5])
    article['text_upper'] = ". ".join(parts[5:])
    article['published'] = str(np.random.randint(2,10)) + ' hrs'
    article['site_url'] = row.site_url
    article['main_img_url'] = row.main_img_url
    article['category'] = row.type
    article['icon_number'] = row.icon_num
    article['author'] = row.author

    return article

def get_random_article(category=None):
    df = get_news_df('data/gold_dataset.csv')
    if category == None:
        valid_categories = ['conspiracy', 'satire', 'hate', 'state']
        chosen_category = np.random.choice(valid_categories)
    else: 
        chosen_category = category
    return random_article_by_category(df, chosen_category)

def get_random_article_by_difficulty(df, difficulty_label):
    article = {}
    if difficulty_label == 'hard':
        new_df = df.loc[df['difficulty'] > 0.9]
    elif difficulty_label == 'easy':
        new_df = df.loc[df['difficulty'] < 0.1]
    chosen_id = np.random.choice(new_df.index)
    article = get_article_by_uuid(new_df, chosen_id)
    return article
