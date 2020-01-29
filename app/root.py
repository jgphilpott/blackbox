from flask import Flask, render_template
<<<<<<< HEAD
from sense_hat import SenseHat

app = Flask("blackbox", template_folder="app", static_folder="app")

sense = SenseHat()
message = "Welcome to the futrue!"
sense.show_message(message)

@app.route("/")
def home():
    
    return render_template("html/home.html", message=message)

if __name__ == "__main__":
    
=======
from sass import compile

app = Flask("blackbox", template_folder="app", static_folder="app")

@app.route("/")
def home():
    return render_template("html/home.html")

if __name__ == "__main__":
    compile(dirname=("app/sass", "app/css"))
>>>>>>> 31eb492b37bac7982112b33a656075c66dbf964d
    app.jinja_env.auto_reload = True
    app.run(host="0.0.0.0", port=5000, debug=True)
