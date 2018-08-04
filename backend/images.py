from flask import request, redirect, url_for, Blueprint
import os
import hashlib
import time

UPLOAD_FOLDER = 'backend/uploads'
images_blueprint = Blueprint('images', __name__, template_folder='templates')


@images_blueprint.route('/', methods=['POST'])
def upload_file():
    print('here')
    return "Complete"
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit a empty part without filename
        if file.filename == '':
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(UPLOAD_FOLDER, filename))
                return redirect(url_for('uploaded_file',
                                        filename=filename))


def allowed_file(filename):
    return True


def secure_filename(filename):
    name_hash = hashlib.sha1()
    name_hash.update(str(time.time()) + filename)
    return name_hash.hexdigest()[:10]
