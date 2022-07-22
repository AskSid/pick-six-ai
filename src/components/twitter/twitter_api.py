
import tweepy
import configparser
import pandas as pd
import json
import datetime


# read configs
config = configparser.ConfigParser()
config.read('src/components/twitter/config.ini')

api_key = config['twitter']['api_key']
api_key_secret = config['twitter']['api_key_secret']

access_token = config['twitter']['access_token']
access_token_secret = config['twitter']['access_token_secret']

bearer_token = "AAAAAAAAAAAAAAAAAAAAAEYXfAEAAAAAVAva1NgpkyKQEIuHAgkyPGuBC0g%3DqAObggo6SJxzbKyGnA6OZnRNXsrxe69dFPhTyl3yK3Vlh2eAiq"

# print(api_key)

# auth = tweepy.OAuthHandler(api_key, api_key_secret)
# auth.set_access_token(access_token, access_token_secret)

# api = tweepy.API(auth)
# public_tweets = api.user_timeline()

# for tweet in public_tweets:
#     print(tweet.text)

#--------------------------THIS GETS TWEETS FROM ALL SOURCES-------------------------------------#
client = tweepy.Client(bearer_token= bearer_token)

users = client.get_users_following(id=1546948938690863105)

following_user_ids = []

usernames = []
for user in users.data:
    following_user_ids.append(user.id)
    usernames.append(user.name)

data = []
count = 0
for user in following_user_ids:
    tweets = client.get_users_tweets(id=user, max_results=20)
    for tweet in tweets.data:
        obj = {}
        obj['author'] = usernames[count]
        obj['text'] = tweet.text
        response = client.get_tweet(id=tweet.id, tweet_fields=['created_at'])
        obj['time'] = response.data.created_at.strftime('%m/%d/%Y')
        print(response.data.created_at.strftime('%m/%d/%Y'))
        data.append(obj)
    count += 1
        
    
def writeToJSONFile(name, data):
    with open("src/components/twitter/" + name, 'w') as fp:
        json.dump(data, fp)

writeToJSONFile("tweets.json", data)

with open("src/components/twitter/tweets.json") as tw:
    tweets = json.load(tw)
with open("src/players.json") as p:
    players = json.load(p)

player_dict = {}
for player in players:
    obj = []
    for tweet in tweets:
        if player["Player"] in tweet["text"]:
            obj.append(tweet)
    player_dict[player["Player"]] = obj

writeToJSONFile("filtered_tweets.json", player_dict)