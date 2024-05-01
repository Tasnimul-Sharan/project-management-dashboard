"use client"
import React from 'react';
import { Layout, Menu, Dropdown, Tooltip, Space, Progress, Modal } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  MoreOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../images/ph_logo-svg.png';

const { Header, Content, Footer } = Layout;

const DashboardLayout = ({ children }) => {
  const moreOptionsMenu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <Layout className="min-h-screen bg-gray-100">
      {/* Header with navigation */}
      <Header className="flex justify-between items-center bg-primary p-4 sticky top-0 z-10">
        <Image src={logo} width={32} height={32} alt="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="flex-grow">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            <Link href="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<MailOutlined />}>
            <Link href="/contact">Contact</Link>
          </Menu.Item>
          {/* Dropdown with additional options */}
          <Dropdown overlay={moreOptionsMenu} trigger={['click']} className="ml-auto">
            <Tooltip title="More options">
              <MoreOutlined className="text-white cursor-pointer" />
            </Tooltip>
          </Dropdown>
        </Menu>
      </Header>

      {/* Content for page content */}
      <Content className="p-6">
        {children} {/* Render child components/pages */}
      </Content>

      {/* Footer with social media links */}
      <Footer className="bg-primary text-white text-center p-3">
        <Space>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined />
          </a>
          <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            <GithubOutlined />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined />
          </a>
        </Space>
        <div>Ant Design ©{new Date().getFullYear()} Created by Ant UED</div>
      </Footer>
    </Layout>
  );
};

export default DashboardLayout;
