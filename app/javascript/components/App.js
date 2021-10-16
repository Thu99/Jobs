import React from "react";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
const { Header, Sider, Content } = Layout;
import './style.css'
class App extends React.Component {
  render() {
    return (
      <Layout className="dsadasdasdsd">
        <Sider className="site-layout-background">
          <div className="logo" style={{ height: 60 }} />
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ marginLength: 35, font: 18 }}>
            <MenuUnfoldOutlined />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 20px',
              padding: 35,
              minHeight: 800,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
