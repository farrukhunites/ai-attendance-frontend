import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "antd";
import "./camera.css";

const CameraPage = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    if (webcamRef.current) {
      const capturedImage = webcamRef.current.getScreenshot();
      setImage(capturedImage); // Save the image to state
    }
  };

  return (
    <div className="camera-page">
      <h1>Take a Picture</h1>
      <div className="camera-container">
        {image ? (
          <div className="image-preview">
            <img src={image} alt="Captured" />
            <Button
              type="primary"
              onClick={() => setImage(null)}
              style={{ marginTop: "10px" }}
            >
              Retake
            </Button>
          </div>
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={400}
            style={{ borderRadius: "10px", border: "2px solid #ccc" }}
          />
        )}
      </div>
      {!image && (
        <Button type="primary" onClick={capture} style={{ marginTop: "20px" }}>
          Capture Photo
        </Button>
      )}
    </div>
  );
};

export default CameraPage;
