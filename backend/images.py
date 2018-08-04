from flask import request, redirect, url_for, Blueprint
import os
import hashlib
import time

UPLOAD_FOLDER = './uploads'
images_blueprint = Blueprint('images', __name__, template_folder='templates')


@images_blueprint.route('/', methods=['POST'])
def upload_image():
    # check if the post request has the file part
    if 'image' not in request.files:
        return redirect(request.url)
    file = request.files['image']
    # if user does not select file, browser also
    # submit a empty part without filename
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(UPLOAD_FOLDER, filename))
        return url_for('images.get_image', filename=filename)


@images_blueprint.route('/<filename>', methods=['GET'])
def get_image(filename):
    return filename


def allowed_file(filename):
    return True


def secure_filename(filename):
    _, extension = os.path.splitext(filename)
    name_hash = hashlib.sha1()
    name_hash.update((str(time.time()) + str(filename)).encode('utf-8'))
    return name_hash.hexdigest()[:10]+extension
