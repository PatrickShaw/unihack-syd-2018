from math import sqrt
from base64 import b64encode
import cv2


class CaptureDevice:
    def __init__(self, device_id=1):
        """Opens the given video capture device.
        Args:
            device_id (int): The device ID of the video capture device to open,
                with 0 representing the first device.
        Raises:
            Exception: The given video capture device could not be opened.
        """
        self.capture = cv2.VideoCapture(device_id)
        if not self.capture.isOpened():
            # Webcam couldn't be opened
            raise Exception('could not open video device ' + device_id)

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.capture.release()

    def capture_frame(self, quality=90, pixels=921600):
        """Captures a frame from the capture device.
        Args:
            quality (int): A value between 0 and 100 representing the quality
                of the JPEG to create.
            pixels (int): The number of pixels the returned image should be
                resized to (e.g. 921600 pixels is 1280*720), preserving the
                aspect ratio of the captured image.
        Returns:
            str: A base64 encoded JPEG file.
        Raises:
            Exception: A frame could not be captured from the webcam.
        """
        return_value, frame = self.capture.read()
        if not return_value:
            # Could not capture frame
            raise Exception('error capturing frame')

        # Resize image
        if frame.shape[1] * frame.shape[0] > pixels:
            new_size = (
                int(round(
                    (sqrt(frame.shape[1]) * sqrt(pixels)) / sqrt(frame.shape[0])
                )),
                int(round(
                    (sqrt(frame.shape[0]) * sqrt(pixels)) / sqrt(frame.shape[1])
                ))
            )
            frame = cv2.resize(
                frame, new_size, interpolation=cv2.INTER_LANCZOS4
            )

        # Encode as JPEG with given quality
        return_value, jpeg = cv2.imencode(
            '.jpg', frame, [cv2.IMWRITE_JPEG_QUALITY, quality]
        )
        return b64encode(jpeg.tobytes())