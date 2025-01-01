import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { Link, Outlet } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./layout.css";

const { Header, Footer, Content } = Layout;

const CustomLayout = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <Layout className="layout">
      {/* Navbar */}
      <Header className="header">
        <div className="logo">
          <Link to="/">AI Attendance System</Link>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">About Us</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
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
        </Menu>
      </Drawer>

      {/* Page Content */}
      <Content className="content">
        <Outlet />
      </Content>

      {/* Footer */}
      <Footer className="footer">
        <div className="footer-content">
          <p>Copyright &copy; Your Website {new Date().getFullYear()}</p>
        </div>
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
