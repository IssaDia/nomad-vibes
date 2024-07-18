import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HeaderProps } from "../types/header";
import Title from "./Title";

const Header: React.FC<HeaderProps> = ({
  links,
  brand,
  isAuthenticated,
  onLogout,
  backgroundImage,
  title,
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="relative shadow-md">
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative flex flex-col h-[50vh] md:h-[940px]">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center md:justify-start">
          <div className="md:hidden">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={showDrawer}
              className="text-white"
            />
          </div>
          <div className="text-3xl font-helvetica font-bold flex-grow md:flex-grow-0 text-center md:text-left text-white">
            <Link to="/" className="text-white">
              {brand}
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-end">
            <Menu
              mode="horizontal"
              className="flex-grow justify-end border-none bg-transparent"
            >
              {links.map((link) => (
                <Menu.Item key={link.key} style={{ borderBottom: "none" }}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </Menu.Item>
              ))}
              {isAuthenticated ? (
                <Menu.Item key="logout" style={{ borderBottom: "none" }}>
                  <button
                    onClick={onLogout}
                    className="text-white/50 hover:text-white"
                  >
                    Logout
                  </button>
                </Menu.Item>
              ) : (
                <Menu.Item key="login" style={{ borderBottom: "none" }}>
                  <Link to="/login" className="text-white/50 hover:text-white">
                    Login
                  </Link>
                </Menu.Item>
              )}
            </Menu>
          </div>
          <Drawer
            title={<span className="text-white">{brand}</span>}
            placement="left"
            onClose={closeDrawer}
            visible={drawerVisible}
            className="md:hidden"
          >
            <Menu mode="vertical" className="bg-transparent">
              {links.map((link) => (
                <Menu.Item key={link.key} style={{ borderBottom: "none" }}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </Menu.Item>
              ))}
              {isAuthenticated ? (
                <Menu.Item key="logout" style={{ borderBottom: "none" }}>
                  <button
                    onClick={onLogout}
                    className="text-white/50 hover:text-white"
                  >
                    Logout
                  </button>
                </Menu.Item>
              ) : (
                <Menu.Item key="login" style={{ borderBottom: "none" }}>
                  <Link to="/login" className="text-white/50 hover:text-white">
                    Login
                  </Link>
                </Menu.Item>
              )}
            </Menu>
          </Drawer>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-8">
          <Title
            text={title}
            size="5xl"
            color="text-white"
            margin="m-8"
            padding="p-4"
            textAlign="left"
            fontWeight="bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
