from flask import Flask, jsonify, request #import objects from the Flask model
from flask_restful import Resource, Api
from flask_cors import CORS

import numpy as np
import emailTest as et
import news_generator as news
import headline_generator as headline_gen


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
        news_icon_number = article['icon_number']
        news_icon_str = str(news_icon_number)

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


class SendEmail(Resource):
    def get(self):
        et.send_email()


class GetRandomHeadline(Resource):
    def get(self):
        filename = 'data/headlines.csv'
        headline, label = headline_gen.get_random_headline(filename)
        return {'headline': headline, 'label': label}


api.add_resource(Test, '/')
api.add_resource(GetRandomArticle, '/article')
api.add_resource(SendEmail, '/sendemail')
api.add_resource(GetRandomHeadline, '/headline')


if __name__ == '__main__':
    app.run(debug=True, port=5000) #run app on port 5000 in debug mode
