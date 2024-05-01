"use client"

import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Dropdown,
  Tooltip,
  Space,
  Progress,
  Modal,
  Statistic,
} from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  MoreOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as ChartTooltip,
  Legend,
} from 'recharts';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/ph_logo-svg.png';

const { Header, Content, Footer } = Layout;

const chartData = [
  { week: 'Week 1', value: 100 },
  { week: 'Week 2', value: 200 },
  { week: 'Week 3', value: 150 },
  { week: 'Week 4', value: 300 },
];

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const moreOptionsMenu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <Layout className="min-h-screen bg-gray-100">

      <Header
        className="flex justify-start items-center bg-primary p-4 sticky top-0 z-10"
      >
        <Image src={logo} width={32} height={32} alt="logo" />
       
        <Menu  style={{
            flex: 1,
            minWidth: 0,
          }}  theme="dark" mode="horizontal" className="flex-grow">
          
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link href="/dashboard">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            <Link href="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<MailOutlined />}>
            <Link href="/contact">Contact</Link>
          </Menu.Item>

          <Dropdown overlay={moreOptionsMenu} trigger={['click']} className="ml-auto">
            <Tooltip title="More options">
              <MoreOutlined className="text-white cursor-pointer" />
            </Tooltip>
          </Dropdown>
        </Menu>
      </Header>

      
      <Content className="p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Project Overview</h1>
        <div className="w-full flex justify-around mb-6">
            <Statistic title="Total Projects" value={25} />
            <Statistic title="Completed Projects" value={10} />
            <Statistic title="Ongoing Projects" value={15} />
          </div>
        
        <Space size="large" className="mb-6">
          <Progress
            type="circle"
            percent={40}
            format={(percent) => `Project 1\n${percent}%`}
          />
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `Project 2\n${percent}%`}
          />
          <Progress
            type="circle"
            percent={90}
            format={(percent) => `Project 3\n${percent}%`}
          />
        </Space>

        
        <LineChart width={600} height={300} data={chartData} className="mb-6">
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="week" />
          <YAxis />
          <ChartTooltip />
          <Legend />
        </LineChart>

        
        <button
          className="btn-primary"
          onClick={() => setIsModalVisible(true)}
        >
          Open Modal
        </button>

        
        <Modal
          title="Project Details"
          visible={isModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
        >
          This modal can contain additional information or confirm actions.
        </Modal>
      </Content>

      
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
        <div>Project Management Dashboard ©{new Date().getFullYear()} Created by Tasnimul Alam</div>
      </Footer>
    </Layout>
  );
};

export default App;

