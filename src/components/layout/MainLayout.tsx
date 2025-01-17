// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";

import { Button, Layout } from "antd";
import { Outlet } from "react-router";

import { useAppDispath } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";
import Sidebar from "./Sidbar";

// import { createElement } from "react";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispath();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={handleLogout}>LogOut</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
