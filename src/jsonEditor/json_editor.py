import json
from json.encoder import INFINITY

with open('src/players.json') as fh1:
    json_data = json.load(fh1)
with open('src/expectedPoints.json') as fh2:
    json_data2 = json.load(fh2)
with open('src/defenses.json') as fh3:
    json_data3 = json.load(fh3)


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
        if player["FantPos"] == "DEF":
            player["Sack"] = 0
            player["FR"] = 0
            player["FF"] = 0
            player["DefTD"] = 0
            player["Safety"] = 0
            player["SpcTD"] = 0
        # player["Tm"] = player["Team"]
        # player["Cmp"] = 0
        # player["Att"] = [0,0]
        # player["Yds"] = [0,0,0]
        # player["TD"] = [0,0,0,0]
        # player["Int"] = 0
        # player["Y"] = {"A": 0, "R": 0}
        # player["Tgt"] = 0
        # player["Rec"] = 0
        # player["Fmb"] = 0
        # player["FantPt"] = 0
        # player["FGA"] = [0,0,0,0,0,0]
        # player["FGM"] = [0,0,0,0,0,0]
        # player["Lng"] = [0,0]
        # player["FG%"] = 0
        # player["XPA"] = 0
        # player["XPM"] = 0
        # player["Rk"] = 0
        # player["FantPos"] = "DEF"
        # data.append(player)


        

def addExpectedPoints():
    for player in json_data:
        for dict in json_data2:
            if dict["Player"] == player["Player"]:
                player["expectedPoints"] = dict["expectedPoints"]
    for player in json_data:
        if "expectedPoints" not in player.keys():
            player["expectedPoints"] = 0

def writeToJSONFile(path, fileName, data):
    filePathNameWExt = './' + path + '/' + fileName + '.json'
    with open(filePathNameWExt, 'w') as fp:
        json.dump(data, fp)

setupPlayers()
data = json_data
writeToJSONFile('src','players', data)
