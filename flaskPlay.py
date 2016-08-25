from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/lists')
def lists():
    return render_template('listPlay.html')

@app.route('/tables')
def tables():
    return render_template('tablePlay.html')

@app.route('/form')
def form():
    return render_template('Form.html')

@app.route('/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run()
