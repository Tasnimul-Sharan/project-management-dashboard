"use client"

import DashboardLayout from '@/app/dashboard/(dashboardLayout)/layout';
import { Button, Table, Modal, Form, Input } from 'antd';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = useParams();

  // Mock project data
  const project = {
    id,
    name: 'Project Alpha',
    description: 'Detailed description for Project Alpha',
    tasks: [
      { id: 1, name: 'Task 1', status: 'To Do' },
      { id: 2, name: 'Task 2', status: 'In Progress' },
    ],
    team: [{ id: 1, name: 'Team Member 1' }],
    activities: [
      { id: 1, description: 'Activity 1' },
      { id: 2, description: 'Activity 2' },
    ],
  };

  const [isTaskModalVisible, setTaskModalVisible] = useState(false);

  const taskColumns = [
    { title: 'Task Name', dataIndex: 'name', key: 'name' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

  const handleAddTask = (values) => {
    console.log('New Task:', values); // You could integrate state management here
    setTaskModalVisible(false);
  };

  return (
    <DashboardLayout className="p-8">
      <h1 className="text-2xl">{project.name}</h1>
      <p>{project.description}</p>

      <h2 className="text-xl">Tasks</h2>
      <Button onClick={() => setTaskModalVisible(true)}>Add Task</Button>
      <Table columns={taskColumns} dataSource={project.tasks} rowKey="id" />

      <Modal
        title="Add New Task"
        visible={isTaskModalVisible}
        onCancel={() => setTaskModalVisible(false)}
        onOk={() => setTaskModalVisible(false)}
      >
        <Form onFinish={handleAddTask}>
          <Form.Item
            label="Task Name"
            name="taskName"
            rules={[{ required: true, message: 'Please enter the task name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Status"
            name="taskStatus"
            rules={[{ required: true, message: 'Please select the task status' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <h2 className="text-xl">Team Members</h2>
      {project.team.map((member) => (
        <div key={member.id}>{member.name}</div>
      ))}

      <h2 className="text-xl">Recent Activities</h2>
      {project.activities.map((activity) => (
        <div key={activity.id}>{activity.description}</div>
      ))}
    </DashboardLayout>
  );
};

export default ProjectDetails;

