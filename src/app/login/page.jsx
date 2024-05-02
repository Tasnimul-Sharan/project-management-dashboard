"use client";

import { Form, Input, Button, message, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (values) => {
    const { email, password } = values;

    // Mock authentication response
    if (email === 'admin@gmail.com' && password === '1234') {
      message.success('Login successful');
      router.push('/dashboard');
    } else {
      message.error('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f8fafc]">
      <div className="bg-white p-10 rounded-lg shadow-inner border w-80 md:w-96">
        <Title level={3} className="text-center text-gray-700 mb-6">
          Login to Your Account
        </Title>
        <Form onFinish={handleLogin} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Enter your email"
              className="w-full px-2 py-2 border rounded-md outline-none focus:outline-base-300" 
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Enter your password"
              className="w-full px-2 py-2 border rounded-md outline-none focus:outline-base-300" 
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full rounded-md bg-indigo-600 hover:bg-indigo-700">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
