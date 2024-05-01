"use client";

import { Form, Input, Button, message } from 'antd';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (values) => {
    const { username, password } = values;

    // Mock authentication response
    if (username === 'admin' && password === 'password') {
      message.success('Login successful');
      router.push('/projects');
    } else {
      message.error('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form onFinish={handleLogin} className="w-1/3 bg-white p-8 shadow-lg">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
