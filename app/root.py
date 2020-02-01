from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from sense_hat import SenseHat
from sensors import get_readings
from os import urandom

app = Flask("blackbox", template_folder="app", static_folder="app")
app.config["SECRET_KEY"] = urandom(42).hex()
app.jinja_env.auto_reload = True

sense_hat = SenseHat()
sense_hat.clear()

socketio = SocketIO(app)

@app.route("/")
def home():

    return render_template("html/home.html")

@socketio.on("request_reading")
def request_reading():

    try:

        socketio.emit("new_reading", get_readings(sense_hat), broadcast=True)

    except:

        print("Reading Error!")

@socketio.on("new_comms")
def new_comms(message):

    sense_hat.show_message(message)

if __name__ == "__main__":

    socketio.run(app, host="0.0.0.0", port=5000, debug=True)
