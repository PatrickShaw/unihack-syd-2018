from pydarknet import Detector, Image
import cv2

DARKNET_PATH = '/Users/SudhirMandarappu/unihack-2018/unihack-syd-2018/darknet'


def detect(image_path, history):
    entities = get_entities(image_path)
    print(entities)
    # stats = update_history(entities, history)
    # return stats


def get_entities(image_path):
    detector = Detector(DARKNET_PATH,
                        DARKNET_PATH + '/cfg/coco.data',
                        DARKNET_PATH + '/cfg/yolo.cfg',
                        DARKNET_PATH + '/yolo.weights')

    results = detector.detect(DARKNET_PATH + '/data/dog.jpg')
    return results
