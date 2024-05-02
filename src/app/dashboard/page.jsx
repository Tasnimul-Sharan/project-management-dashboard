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
  Button,
} from 'antd';

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
import DashboardLayout from './(dashboardLayout)/layout';

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
    <DashboardLayout className="min-h-screen bg-gray-100">

      
      <Content className="p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Project Overview</h1>
        <div className="w-full flex justify-around mb-6">
            <Statistic  className='bg-wgite shadow-inner rounded-md border p-7' title="Total Projects" value={25} />
            <Statistic className='bg-wgite shadow-inner rounded-md border p-7' title="Completed Projects" value={10} />
            <Statistic className='bg-wgite shadow-inner rounded-md border p-7' title="Ongoing Projects" value={15} />
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

        
        <Button
          className="btn-primary"
          onClick={() => setIsModalVisible(true)}
        >
          About More Projects
        </Button>

        
        <Modal
          title="About Projects"
          visible={isModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
        >
          Our So many Projects are under development. Three projects progress are only showing for you.
        </Modal>
      </Content>
      

    </DashboardLayout>
  );
};

export default App;

