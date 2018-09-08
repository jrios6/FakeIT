from flask import Flask, jsonify, request #import objects from the Flask model
from flask_restful import Resource, Api
from flask_cors import CORS

import news_generator as news
import numpy as np

app = Flask(__name__) #define app using Flask
CORS(app)
api = Api(app)

class Test(Resource):
    def get(self):
        return {'status': 'live'}

# Get random article from specific category
class GetRandomArticle(Resource):
    def put(self):
        # Get requested category or None
        if request.json == None or 'category' not in request.json:
            category = 'bs'
        else:
            category = request.json['category']

        article = news.get_random_article(category)

        # other stats
        num_comments = np.random.randint(2,100)
        num_likes = np.random.randint(num_comments, 250)
        num_shares = np.random.randint(1,int(num_likes/2))
        news_icon_number = np.random.randint(1, 7)
        news_icon_str = 'python/data/news_icon/' + str(news_icon_number) + '.jpg'

        data = {'title': article['title'], 
                'text_lower': article['text_lower'],
                'text_upper': article['text_upper'],
                'imageURL': article['main_img_url'],
                'date': article['published'],
                'siteUrl': article['site_url'],
                'category': article['category'],
                'num_comments': num_comments,
                'num_likes': num_likes,
                'num_shares': num_shares,
                'news_icon_str': news_icon_str}
        return data

api.add_resource(Test, '/')
api.add_resource(GetRandomArticle, '/article')

if __name__ == '__main__':
    app.run(debug=True, port=5000) #run app on port 5000 in debug mode
