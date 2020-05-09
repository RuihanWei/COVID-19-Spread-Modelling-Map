import json

with open("../data/cbg.json", "r") as jsonFile:
  data = json.load(jsonFile)

new_data = []
for x in data["features"]:
  temp = {}
  temp["CensusBlockGroup"] = x["properties"]["CensusBlockGroup"]
  temp["geometry"] = x["geometry"]
  new_data.append(temp)

with open("../data/new_cbg.json", "w") as outfile:
  json.dump(new_data, outfile)
