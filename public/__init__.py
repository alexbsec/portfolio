from flask import Flask

def create_app():
    app = Flask(__name__) # represents the name of the file
    app.config['SECRET_KEY'] = 'oko3j8jfssj29kflsmk19'

    return app


