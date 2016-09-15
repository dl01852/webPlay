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


@app.route('/solution15')
def solution15():
    return render_template('solution15.html')


@app.route('/solution16')
def solution16():
    return render_template('solution16.html')


@app.route('/inputs')
def inputs():
    return render_template('inputs.html')


@app.route('/inlineCss')
def inlineCss():
    return render_template('inlineCSS.html')


@app.route('/cssTest')
def cssTest():
    return render_template('cssTest.html')


@app.route('/CSPlay')
def csPlay():
    return render_template('cssPlay.html')


@app.route('/borderPlay')
def borderControl():
    return render_template('borderControl.html')


@app.route('/m2e1')
def module2():
    return render_template('M2E1.html')


@app.route('/m2e2')
def m2e2():
    return render_template('M2E2.html')


@app.route('/m2e3')
def m2e3():
    return render_template('M2E3.html')


@app.route('/m2e4')
def m2e4():
    return render_template('M2E4.html')


@app.route('/module3')
def module3():
    return render_template('Module3.html')
if __name__ == '__main__':
    app.run()
