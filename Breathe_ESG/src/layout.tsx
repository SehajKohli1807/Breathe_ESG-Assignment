import React from "react";
import { Flex, Layout, Menu } from "antd";

import { CalendarOutlined, MailOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "black",
  backgroundColor: "#ffff",
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
};

const AppLayout: React.FC = () => (
  <Layout style={layoutStyle} className="container">
    <Sider width="15%" style={siderStyle}>
      Sider
      <Menu
        theme="dark"
        color="white"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <MailOutlined />,
            label: "Navigation One",
            style: {
              backgroundColor: "#181818",
              color: "#ffff",
              opacity: 0.7,
              padding: 0,
              margin: 0,
            },
          },
          {
            key: "2",
            icon: <CalendarOutlined />,
            label: "Navigation Two",
            style: {
              backgroundColor: "#181818",
              color: "#ffff",
              opacity: 0.7,
              padding: 0,
              margin: 0,
            },
          },
        ]}
      ></Menu>
    </Sider>
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>Content</Content>
    </Layout>
  </Layout>
);

export default AppLayout;
