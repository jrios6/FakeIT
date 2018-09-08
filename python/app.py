from flask import Flask, jsonify, request #import objects from the Flask model
from flask_restful import Resource, Api
from flask_cors import CORS

import news_generator as news

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
        category = request.json['category']
        article = news.get_random_article(category)
        data = {'title': article['title'],
                'text': article['text'],
                'imageURL': article['main_img_url'],
                'date': article['published'],
                'siteUrl': article['site_url'],
                'category': article['category']}
        return data

api.add_resource(Test, '/')
api.add_resource(GetRandomArticle, '/article')

if __name__ == '__main__':
    app.run(debug=True, port=5000) #run app on port 5000 in debug mode
