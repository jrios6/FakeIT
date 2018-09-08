from urllib.parse import urlencode
from urllib.request import Request, urlopen
import json
import numpy as np
import pandas as pd

# Helper functions
def get_json_str(api_url, title, content=None, url=None):
    if content and url:
        post_fields = {'title': title, 'content': content, 'url': url}     # Set POST fields here
    elif content:
        post_fields = {'title': title, 'content': content}     # Set POST fields here
    else:
        post_fields = {'title': title}
    request = Request(api_url, urlencode(post_fields).encode())
    json_str = urlopen(request).read().decode()
    return json_str

def parse_json_str(json_str, content=None, url=None):
    json_data = json.loads(json_str)
    title_fake_score = json_data['title']['score']
    title_pred_type = json_data['title']['decision']
    if content:
        content_fake_score = json_data['content']['score']
        content_pred_type = json_data['content']['decision']
    else:
        content_fake_score = 0
        content_pred_type = 0
    if url:
        domain_type = json_data['domain']['category']
    else:
        domain_type = None
    return title_fake_score, title_pred_type, content_fake_score, content_pred_type, domain_type
  