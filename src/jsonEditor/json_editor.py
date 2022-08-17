import json
from json.encoder import INFINITY

with open('src/players.json') as fh1:
    json_data = json.load(fh1)


newPlayers = []


def setupFunction():
    num = 0
    for player in json_data:
        obj = {}

        try:
            if (player["PPR"] < 70):
                continue
        except:
            continue

        if (player["FantPos"] != "WR"):
            continue
        
        obj['name'] = player["Player"]
        obj['last-year-pos-rank'] = player["PosRank"]
        obj['position'] = player["FantPos"]
        obj["analysis"] = ""
        obj["team"] = player["Tm"]
        obj["ADP"] = [None, None]
        obj["pos-rank-projection"] = [None, None]
        obj["overall"] = [None, None]
        
        data.append(obj)

def addFunction():
    #Adds new players
    addNewPlayers()
    for player in newPlayers:
        for key in json_data[0].keys():
            player[key] = 0

        player['Player'] = player["name"]
        player['FantPos'] = player["position"]
        player['Tm'] = player["team"]
        player['Att'] = [0,0]
        player['Yds'] = [0,0,0]
        player['TD'] = [0,0,0,0]
        player["PosRank"] = "N/A"
        

        data.append(player)


    #Adds existing players and removes players that retired
    for player in json_data:
        match = searchFunction(player["Player"])
        try:
            player['analysis'] = match['analysis']
        except:
            continue
        data.append(player)


def searchFunction(p):
    for player in json_data2:
        if player['name'] == p:
            return player

def addNewPlayers():
    for newPlayer in json_data2:
        flag = True
        for player in json_data:
            if newPlayer["name"] == player["Player"]:
                flag = False
        if flag:
            newPlayers.append(newPlayer)

data = []

def setupPlayers():
    for player in json_data:
        obj = {}
        if player["FantPos"] == "k":
            player["Cmp"] = 0
            player["Att"] = [0,0]
            player["Yds"] = [0,0,0]
            player["TD"] = [0,0,0,0]
            player["Int"] = 0
            player["Y"] = {"A": 0, "R": 0}
            player["Tgt"] = 0
            player["Rec"] = 0
            player["Fmb"] = 0
            player["FantPt"] = 0

                
# "Cmp": 0,
#    "Att": [
#       0,
#       0
#    ],
#    "Yds": [
#       0,
#       0,
#       -3
#    ],
#    "TD": [
#       0,
#       0,
#       0,
#       0
#    ],
#    "Int": 0,
#    "Y": {
#       "A": null,
#       "R": -3
#    },
#    "Tgt": 4,
#    "Rec": 1,
#    "Fmb": 2,
#    "FL": 2,
#    "2PM": null,
#    "2PP": null,
#    "FantPt": -4,

def writeToJSONFile(path, fileName, data):
    filePathNameWExt = './' + path + '/' + fileName + '.json'
    with open(filePathNameWExt, 'w') as fp:
        json.dump(data, fp)

setupPlayers()
data = json_data

writeToJSONFile('src','players', data)
