from flask import Flask

app = Flask("blackbox")

@app.route("/")
def home():
    return "Welcome to blackbox!"

if __name__ == "__main__":
    app.jinja_env.auto_reload = True
    app.run(host="0.0.0.0", port=5000, debug=True)
