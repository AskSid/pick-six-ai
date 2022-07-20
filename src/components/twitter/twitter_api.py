
import tweepy
import configparser
import pandas as pd

# read configs
config = configparser.ConfigParser()
config.read('src/components/twitter/config.ini')

api_key = config['twitter']['api_key']
api_key_secret = config['twitter']['api_key_secret']

access_token = config['twitter']['access_token']
access_token_secret = config['twitter']['access_token_secret']

print(api_key)

auth = tweepy.OAuthHandler(api_key, api_key_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)
public_tweets = api.user_timeline()

for tweet in public_tweets:
    print(tweet.text)