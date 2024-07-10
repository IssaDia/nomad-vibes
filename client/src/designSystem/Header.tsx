import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";
import { HeaderProps } from "../types/header";

const Header: React.FC<HeaderProps> = ({ links, brand }) => {
  const { isAuthenticated } = useAuth();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="relative bg-white shadow-md">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/wallpaper_nomad_vibes.png')] h-full"></div>
      <div className="relative flex flex-col h-[50vh] md:h-[940px]">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center md:justify-start">
          <div className="md:hidden">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={showDrawer}
              className="text-black"
            />
          </div>
          <div className="text-xl font-helvetica font-bold flex-grow md:flex-grow-0 text-center md:text-left">
            <Link to="/">{brand}</Link>
          </div>
          <div className="hidden md:flex flex-grow justify-end">
            <Menu
              mode="horizontal"
              className="flex-grow justify-end border-none"
            >
              {links.map((link) => (
                <Menu.Item key={link.key} className="hover:text-white">
                  <Link to={link.path} className="hover:text-white">
                    {link.label}
                  </Link>
                </Menu.Item>
              ))}
              {isAuthenticated ? (
                <Menu.Item key="logout" className="hover:text-white">
                  <Link to="/logout" className="hover:text-white">
                    Logout
                  </Link>
                </Menu.Item>
              ) : (
                <Menu.Item key="login" className="hover:text-white">
                  <Link to="/login" className="hover:text-white">
                    Login
                  </Link>
                </Menu.Item>
              )}
            </Menu>
          </div>
          <Drawer
            title={brand}
            placement="left"
            onClose={closeDrawer}
            visible={drawerVisible}
            className="md:hidden"
          >
            <Menu mode="vertical">
              {links.map((link) => (
                <Menu.Item key={link.key}>
                  <Link to={link.path}>{link.label}</Link>
                </Menu.Item>
              ))}
              {isAuthenticated ? (
                <Menu.Item key="logout">
                  <Link to="/logout">Logout</Link>
                </Menu.Item>
              ) : (
                <Menu.Item key="login">
                  <Link to="/login">Login</Link>
                </Menu.Item>
              )}
            </Menu>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
