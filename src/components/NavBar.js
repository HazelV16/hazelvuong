import React from 'react';
import { Menu, Layout} from 'antd';
import { Link } from 'react-router-dom';
const { Header} = Layout;

// Define the navigation items
const items = [
    // { key: '1', label: `Hazel's Porfolio`},
    { key: '2', label: 'About Me', to: '/about-me' },
    { key: '3', label: 'Resume', to: '/resume' },
    { key: '4', label: 'Showcase', to: '/showcase' },
    { key: '5', label: 'Contact', to: '/contact' },
];

const NavBar = () => {

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
                <Menu
                    theme="dark"
                    mode="horizontal"
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
