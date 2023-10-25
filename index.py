from flask import Flask, render_template, request, url_for, jsonify
from flask import render_template
import webbrowser

app = Flask(__name__)


@app.route("/")
def loadMain():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def calculator():
    input_json = request.get_json(force=True)['calculate']

    match input_json['type']:
        case 'plus':
            return jsonify({
                'resault': input_json['number_1'] + input_json['number_2']
            })
        case 'radical':
            return jsonify({
                'resault': input_json['number_1'] ** 0.5
            })


webbrowser.open_new("http://127.0.0.1:5000")
