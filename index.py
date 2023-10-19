from flask import Flask

app = Flask(__name__)
@app.route("/")
def hello_world():
    return open('assets/index.html', 'r', encoding="utf-8").read()