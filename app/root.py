from flask import Flask, render_template
from sense_hat import SenseHat

app = Flask("blackbox", template_folder="app", static_folder="app")

sense = SenseHat()
message = "Welcome to the futrue!"

@app.route("/")
def home():
    
    sense.show_message(message)
    return render_template("html/home.html", message=message)

if __name__ == "__main__":

    app.jinja_env.auto_reload = True
    app.run(host="0.0.0.0", port=5000, debug=True)
