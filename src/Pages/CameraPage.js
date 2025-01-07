import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./camera.css";

const CameraPage = () => {
  const webcamRef = useRef(null);
  const [timer, setTimer] = useState(0); // Tracks remaining time for the next capture

  // Capture a photo and trigger download
  const captureAndSave = () => {
    if (webcamRef.current) {
      const capturedImage = webcamRef.current.getScreenshot();
      if (capturedImage) {
        // Create a link and trigger download
        const link = document.createElement("a");
        link.href = capturedImage;
        link.download = "picture.jpg"; // Set the filename to "picture.jpg"
        link.click(); // Trigger the download
      }
    }
  };

  useEffect(() => {
    const captureDelay = 5000; // Delay in milliseconds (10 seconds)

    // Set the timer to 10 seconds
    setTimer(captureDelay / 1000);

    // Capture image after 10 seconds
    const timerId = setTimeout(() => {
      captureAndSave(); // Capture and save the image
    }, captureDelay);

    return () => {
      clearTimeout(timerId); // Cleanup timeout if the component unmounts
    };
  }, []);

  return (
    <div className="camera-page">
      <h1>Auto Capture Camera</h1>
      <div className="camera-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={400}
          style={{ borderRadius: "10px", border: "2px solid #ccc" }}
        />
        <div className="timer">
          {timer > 0 && <p>Next capture in: {timer} seconds</p>}
        </div>
      </div>
    </div>
  );
};

export default CameraPage;
