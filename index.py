from flask import Flask, render_template, request, url_for, jsonify
from flask import render_template

app = Flask(__name__)


@app.route("/")
def loadMain():
    return render_template('index.html')


@app.route('/', methods=['POST'])
def calculator():
    input_json = request.get_json(force=True)
    print(f'data from client: {input_json}')
    dictToReturn = {'ok': True}
    return jsonify(dictToReturn)
