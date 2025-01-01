import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import ParentLogin from "../Pages/ParentLogin";
import AdminLogin from "../Pages/AdminLogin";
import Attendance from "../Pages/Attendance";
import ViewAttendance from "../Pages/ViewAttendance";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/parent-login" element={<ParentLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/attendance" element={<Attendance />} />
      <Route path="/view-attendance/:id" element={<ViewAttendance />} />

      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};

export default PublicRoutes;
