from flask import Flask
import images as images


app = Flask(__name__)
app.register_blueprint(images.images_blueprint, url_prefix='/images')


@app.route('/')
def hello():
    return "Deployed"


if __name__ == '__main__':
    app.run()
