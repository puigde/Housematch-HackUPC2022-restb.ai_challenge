from flask import Flask, request
from flask_cors import CORS
from termcolor import colored
import json
from backend import recommendation_button, training_button
from pkl import file_exists, load_data, save_data

property_list = load_data("property_data.pkl")

app = Flask(__name__)
CORS(app)

if file_exists("response.pkl"):
  response = load_data("response.pkl")
else:
  response = [None] * len(property_list)

@app.route("/list", methods=["GET"])
def get_list():
  return json.dumps(property_list)

@app.route("/ordering", methods=["GET"])
def get_ordering():
  print("Getting ordering...")
  ordering = recommendation_button(property_list, response)
  print(ordering)
  return json.dumps(ordering)

@app.route("/train", methods=["GET"])
def train_model():
  print("Training model...")
  print(property_list, response)
  training_button(property_list, response)
  return json.dumps(True)

@app.route("/decision", methods=["POST"])
def decision():
  index = request.json["index"]
  if request.json['swipe'] == "right":
    response[index] = 1
    print(colored(f"Swiped {index} right!", "green"))
  else:
    response[index] = 0
    print(colored(f"Swiped {index} left!", "red"))
  print(response)
  save_data(response, "response.pkl")
  return json.dumps(True)
