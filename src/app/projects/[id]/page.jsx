"use client";

import DashboardLayout from '@/app/dashboard/(dashboardLayout)/layout';
import { Button, Table, Modal, Form, Input, Select, Space, DatePicker, Spin } from 'antd';
import { useRouter, useParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import dayjs from 'dayjs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { projectsData } from '@/api/mockData';
import useTaskStore from '@/stores/taskStore';

const ProjectDetails = () => {
    
    const router = useRouter();
    const { id } = useParams();
    // const { tasks, addTask, changeTaskStatus } = useTaskStore(); 
    const taskStore = useTaskStore(id); 
    const { tasks, addTask, changeTaskStatus } = taskStore();
  const [isTaskModalVisible, setTaskModalVisible] = useState(false);

  const [statusFilter, setStatusFilter] = useState('');
  const [assigneeFilter, setAssigneeFilter] = useState('');
  const [dueDateFilter, setDueDateFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProjectDetails = async (id) => {
    const project = projectsData.find((project) => project.id == id);
    if (!project) {
      throw new Error(`Project with ID ${id} not found`);
    }
    return project;
  };

  const { data: project, isLoading, error, refetch } = useQuery({
    queryKey: ['project', id],
    queryFn: () => fetchProjectDetails(id),
    retry: 3,
  });


  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-full">
          <Spin tip="Loading project details..." />
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="p-8 bg-white">
          <p>Error fetching project details. Please try again later.</p>
          <Button onClick={refetch}>Retry</Button>
        </div>
      </DashboardLayout>
    );
  }

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = statusFilter ? task.status === statusFilter : true;
    const assigneeMatch = assigneeFilter ? task.assignee === assigneeFilter : true;
    const dueDateMatch = dueDateFilter
      ? dayjs(task.deadline).isSame(dueDateFilter, 'day')
      : true;
    const searchMatch = searchQuery
      ? task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return statusMatch && assigneeMatch && dueDateMatch && searchMatch;
  });

  const taskColumns = [
    { title: 'Task Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, task) => (
        <Select
          value={task.status}
          onChange={(status) => changeTaskStatus(task.id, status)}
          allowClear
        >
          <Select.Option value="To Do">To Do</Select.Option>
          <Select.Option value="In Progress">In Progress</Select.Option>
          <Select.Option value="Done">Done</Select.Option>
        </Select>
      ),
    },
    { title: 'Deadline', dataIndex: 'deadline', key: 'deadline' },
    { title: 'Assignee', dataIndex: 'assignee', key: 'assignee' },
  ];

  const handleAddTask = (values) => {
    const newTask = {
      id: tasks.length + 1,
      name: values.taskName,
      status: 'To Do',
      description: values.description,
      deadline: values.deadline,
      assignee: values.assignee,
    };
    addTask(newTask); 
    setTaskModalVisible(false); 
  };

  return (
    <DashboardLayout className="p-8 bg-white">
      <h1 className="text-2xl">{project.name}</h1>
      <p>{project.description}</p>
<div className='flex justify-between py-3'>

     
      <Button type="primary" onClick={() => setTaskModalVisible(true)}>Add Task</Button>

      
      <Space style={{ marginBottom: '16px', display: 'flex', justifyContent: 'flex-end' }}>
       
        <Select
          placeholder="Filter by Status"
          onChange={(value) => setStatusFilter(value)}
          allowClear
        >
          <Select.Option value="To Do">To Do</Select.Option>
          <Select.Option value="In Progress">In Progress</Select.Option>
          <Select.Option value="Done">Done</Select.Option>
        </Select>

        
        <Select
          placeholder="Filter by Assignee"
          onChange={(value) => setAssigneeFilter(value)}
          allowClear
        >
          {project.team.map((member) => (
            <Select.Option key={member.id} value={member.name}>
              {member.name}
            </Select.Option>
          ))}
        </Select>

        <DatePicker
          placeholder="Filter by Due Date"
          onChange={(date) => setDueDateFilter(date ? date.format('YYYY-MM-DD') : '')}
        />

      
        <Input.Search
          placeholder="Search tasks"
          onSearch={(value) => setSearchQuery(value)}
          allowClear
        />
      </Space>
</div>

      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) return;
          const { source, destination } = result;

          if (source.droppableId !== destination.droppableId) {
            const sourceIndex = parseInt(source.droppableId, 10);
            const destinationIndex = parseInt(destination.droppableId, 10);

            changeTaskStatus(parseInt(result.draggableId, 10), destination.droppableId);
          }
        }}
      >
        <Droppable droppableId="TaskTable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Table
                columns={taskColumns}
                dataSource={filteredTasks}
                rowKey="id"
                pagination={false}
                components={{
                  body: {
                    row: (props) => {
                      const rowIndex = parseInt(props['data-row-key'], taskColumns);
                      return (
                        <Draggable draggableId={`${rowIndex}`} index={rowIndex}>
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {props.children}
                            </tr>
                          )}
                        </Draggable>
                      );
                    },
                  },
                }}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      
      <Modal
        title="Add New Task"
        visible={isTaskModalVisible}
        onCancel={() => setTaskModalVisible(false)}
        footer={null} 
      >
        <Form layout="vertical" onFinish={handleAddTask}>
          <Form.Item
            label="Task Name"
            name="taskName"
            rules={[{ required: true, message: 'Please enter a task name' }]}
          >
            <Input placeholder="Task Name" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter a description' }]}
          >
            <Input.TextArea placeholder="Description" />
          </Form.Item>
          <Form.Item
            label="Deadline"
            name="deadline"
            rules={[{ required: true, message: 'Please select a deadline' }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            label="Assignee"
            name="assignee"
            rules={[{ required: true, message: 'Please select an assignee' }]}
          >
            <Input placeholder="Assignee" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Add Task</Button>
          </Form.Item>
        </Form>
      </Modal>
    </DashboardLayout>
  );
};

export default ProjectDetails;
