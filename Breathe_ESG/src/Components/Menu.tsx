import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import ContentTable from "./Table/table";
import Banner1 from "./Table/header1";

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#ffff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "black",
  backgroundColor: "#fffff",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "var(--Black18, #181818)",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100vw",
  maxWidth: "100vw",
  backgroundColor: "#ffff",
};

const MenuStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#ffff",
  backgroundColor: "transparent",
  padding: "20px",
};

const AppLayout2: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={layoutStyle} className="container">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="10%"
        style={siderStyle}
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={MenuStyle}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
              style: {
                backgroundColor: "#181818",
                color: "#ffff",
                gap: "12px",
              },
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
              style: {
                backgroundColor: "#181818",
                color: "#ffff",
                gap: "12px",
              },
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
              style: {
                backgroundColor: "#181818",
                color: "#ffff",
                gap: "12px",
              },
            },
          ]}
        />
      </Sider>
      <Layout style={layoutStyle}>
        <Banner1 />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <ContentTable />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout2;
