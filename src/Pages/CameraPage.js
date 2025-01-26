import React, { useState } from "react";
import { Button, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./camera.css";
import { useParams } from "react-router-dom";

const { Dragger } = Upload;

const CameraPage = () => {
  const { courseId } = useParams();

  const [loading, setLoading] = useState(false);

  const [pic1, setPic1] = useState(null);
  const [pic2, setPic2] = useState(null);
  const [pic3, setPic3] = useState(null);

  const markAttendance = async () => {
    const formData = new FormData();
    formData.append(`image 1`, pic1);
    formData.append(`image 2`, pic2);
    formData.append(`image 3`, pic3);
    formData.append("courseId", courseId);

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/receive-images/`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  if (pic1 && pic2 && pic3) {
    console.log(pic1);
    console.log(pic2);
    console.log(pic3);
  }

  const props = {
    name: "file",
    multiple: false,
    action: "/",
    beforeUpload: (file) => {
      const isJpg = file.type === "image/jpeg";
      if (!isJpg) {
        message.error("You can only upload JPG files!");
        return Upload.LIST_IGNORE; // Prevent the file from being uploaded
      }
      return true;
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        console.log(info.file);
        console.log(info.fileList);
        // message.error(`${info.file.name} file upload failed.`);
      }
      setPic1(info.fileList[0]?.originFileObj);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const props2 = {
    name: "file",
    multiple: false,
    action: "/",
    beforeUpload: (file) => {
      const isJpg = file.type === "image/jpeg";
      if (!isJpg) {
        message.error("You can only upload JPG files!");
        return Upload.LIST_IGNORE; // Prevent the file from being uploaded
      }
      return true;
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        console.log(info.file);
        console.log(info.fileList);
        // message.error(`${info.file.name} file upload failed.`);
      }
      setPic2(info.fileList[0]?.originFileObj);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const props3 = {
    name: "file",
    multiple: false,
    action: "/",
    beforeUpload: (file) => {
      const isJpg = file.type === "image/jpeg";
      if (!isJpg) {
        message.error("You can only upload JPG files!");
        return Upload.LIST_IGNORE; // Prevent the file from being uploaded
      }
      return true;
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        console.log(info.file);
        console.log(info.fileList);
        // message.error(`${info.file.name} file upload failed.`);
      }
      setPic3(info.fileList[0]?.originFileObj);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="camera-page">
      <h1>Attendance Images</h1>
      <div className="camera-container">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Attach Image for 2 mins</p>
          <p className="ant-upload-hint">
            Support for a single JPG upload. Strictly prohibited from uploading
            company data or other banned files.
          </p>
        </Dragger>
        <Dragger {...props2}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Attach Image for 20 mins</p>
          <p className="ant-upload-hint">
            Support for a single JPG upload. Strictly prohibited from uploading
            company data or other banned files.
          </p>
        </Dragger>
        <Dragger {...props3}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Attach Image for 45 mins</p>
          <p className="ant-upload-hint">
            Support for a single JPG upload. Strictly prohibited from uploading
            company data or other banned files.
          </p>
        </Dragger>

        <Button loading={loading} onClick={markAttendance} type="primary">
          Mark Attendance
        </Button>
      </div>
    </div>
  );
};

export default CameraPage;
