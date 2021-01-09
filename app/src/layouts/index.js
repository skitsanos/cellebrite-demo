import {MenuFoldOutlined, MenuUnfoldOutlined, PhoneOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import DashboardOutlined from '@ant-design/icons/lib/icons/DashboardOutlined';
import {Layout, Menu} from 'antd';
import React, {useState} from 'react';
import {history} from 'umi';

const {Header, Sider, Content} = Layout;

export default props =>
{
    const {children, location} = props;

    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => setCollapsed(!collapsed);

    return <Layout>
        <Sider trigger={null}
               collapsible
               collapsed={collapsed}>

            <div className="logo">Logo</div>

            <Menu theme={'dark'}
                  mode={'inline'}
                  onSelect={item =>
                  {
                      history.push(item.key);
                  }}
                  defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key={'/'}
                           icon={<DashboardOutlined/>}>
                    Dashboard
                </Menu.Item>

                <Menu.Item key={'/phones'}
                           icon={<PhoneOutlined/>}>
                    Phones
                </Menu.Item>

                <Menu.Item key={'/users'}
                           icon={<UserOutlined/>}>
                    Users
                </Menu.Item>
                <Menu.Item key={'/settings'}
                           icon={<SettingOutlined/>}>
                    Settings
                </Menu.Item>
            </Menu>
        </Sider>

        <Layout className="site-layout">
            <Header className="site-layout-background"
                    style={{padding: 0}}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle
                })}
            </Header>

            <Content
                className="site-layout-background scrollable"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280
                }}>
                {children}
            </Content>
        </Layout>
    </Layout>;
};