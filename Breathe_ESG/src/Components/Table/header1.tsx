import React from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Space,
  Dropdown,
  MenuProps,
  message,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const style: React.CSSProperties = {
  background: "#ffff",
  padding: "4px 0",
  color: "black",
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
];

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App: React.FC = () => (
  <>
    <Divider orientation="left"></Divider>
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ background: "#fffff" }}
    >
      <Col className="gutter-row" span={8}>
        <div style={style}>
          <div>
            <span>
              <a href="">
                {" "}
                <img src="/assests/Step.png" />
              </a>
            </span>
            <span>
              <a>
                <img src="/assests/track.png" />
              </a>
            </span>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style}></div>
      </Col>

      <Col className="gutter-row" span={8}>
        <div style={style}>
          <span style={{ fontWeight: 600 }}>For:</span>
          <span>
            {" "}
            <Dropdown menu={menuProps}>
              <Button style={{ fontWeight: 700 }}>
                <Space>
                  FY 2023-24
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </span>
          <Button type="primary" style={{ fontWeight: 700 }}>
            Submit For Approval
          </Button>
        </div>
      </Col>
    </Row>
  </>
);

export default App;
