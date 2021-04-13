import { useState }  from "react";
import { Link } from "react-router-dom";
import {RouterDashboard} from "../routes/subRoutes";
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from "antd";
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined  } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = () =>{

  const [collapsed, setCollapse] = useState(false);
  const [disable, setDisable ] = useState(false);
  
  const onCollapse = () => {
    setCollapse((collapsed) => !collapsed);
  }

  const openBox = () => {
    setDisable((disable) => !disable);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link href="/dashboard">Caja</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>  
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <RouterDashboard />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Dulce bendicion ©2021 Created by Cristian Vargas</Footer>
        </Layout>
      </Layout>
  );
}

export default Dashboard;
