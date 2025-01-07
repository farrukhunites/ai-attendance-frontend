import React, { useState } from "react";
import {
  Layout,
  Menu,
  Drawer,
  Button,
  Popconfirm,
  Avatar,
  message,
} from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import "./layout.css";

const { Header, Footer, Content } = Layout;

const CustomLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();
  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/home");
    message.success("Logged out successfully!");
  };

  return (
    <Layout className="layout">
      {/* Navbar */}
      <Header className="header">
        <div className="logo">
          <Link to="/">AI Attendance System</Link>
        </div>

        {/* Desktop Menu */}
        <div
          className="desktop-menu"
          style={{ width: "80%", justifyContent: "flex-end" }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ overflow: "visible" }}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">About Us</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/teacher-login">Start Class</Link>
            </Menu.Item>

            {/* Profile Icon with conditional Popconfirm for logout */}
            {isLoggedIn ? (
              <Menu.Item key="profile" style={{ float: "right" }}>
                <Popconfirm
                  title="Are you sure you want to log out?"
                  onConfirm={handleLogout}
                  onCancel={() => {}}
                  okText="Yes"
                  cancelText="No"
                >
                  <Avatar icon={<UserOutlined />} />
                </Popconfirm>
              </Menu.Item>
            ) : (
              <></>
            )}
          </Menu>
        </div>

        {/* Mobile Drawer Button */}
        <div className="mobile-menu">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            className="drawer-button"
          />
        </div>
      </Header>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        className="mobile-drawer"
      >
        <Menu mode="vertical" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" onClick={closeDrawer}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" onClick={closeDrawer}>
            <Link to="/about">About Us</Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={closeDrawer}>
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/start-class">Start Class</Link>
          </Menu.Item>

          {/* Profile Icon with conditional Popconfirm for logout */}
          {isLoggedIn ? (
            <Menu.Item key="profile" style={{ float: "right" }}>
              <Popconfirm
                title="Are you sure you want to log out?"
                onConfirm={handleLogout}
                onCancel={() => {}}
                okText="Yes"
                cancelText="No"
              >
                <Avatar icon={<UserOutlined />} />
              </Popconfirm>
            </Menu.Item>
          ) : (
            <></>
          )}
        </Menu>
      </Drawer>

      {/* Page Content */}
      <Content className="content">
        <Outlet />
      </Content>

      {/* Footer */}
      <Footer className="footer">
        <div className="footer-content">
          <p>Copyright &copy; Ai-Attendance {new Date().getFullYear()}</p>
        </div>
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
