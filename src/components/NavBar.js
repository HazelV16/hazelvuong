import React from 'react';
import { Menu, Layout, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

// Define the navigation items
const items = [
    // { key: '1', label: `Hazel's Porfolio`},
    { key: '2', label: 'About Me', to: '/about-me' },
    { key: '3', label: 'Resume', to: '/resume' },
    { key: '4', label: 'Showcase', to: '/showcase' },
    { key: '5', label: 'Contact', to: '/contact' },
];

const NavBar = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    color: "white",
                    fontSize: 20,
                }}
            >
                <div> Hazel's portfolio </div>
                {/*<div className="demo-logo" />*/}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={['2']}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'center',
                    }}
                >
                    {items.map(item => (
                        <Menu.Item key={item.key}>
                            <Link to={item.to}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Header>
        </Layout>
    );
};

export default NavBar;
