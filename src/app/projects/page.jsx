


"use client";

import { Table, Button, Modal, Spin, message } from 'antd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../dashboard/(dashboardLayout)/layout';
import { useState } from 'react';
import { projectsData } from '@/api/mockData';

const fetchProjects = async () => {
    return projectsData;
  };


const deleteProject = async (projectId) => {
    
    return { success: true, message: `Project with ID ${projectId} deleted successfully.` };
  };
  

const ProjectsOverview = () => {
  const router = useRouter();

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);


  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  
  const queryClient = useQueryClient();

  const deleteProjectMutation = useMutation({
    mutationFn: (projectId) => deleteProject(projectId), 
    onSuccess: () => {
      message.success('Project deleted successfully.');
      queryClient.invalidateQueries(['projects']); 
    },
    onError: (error) => {
      console.error('Deletion failed:', error);
      message.error('Failed to delete project. Please try again.');
    },
  });
  

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-full">
          <Spin tip="Loading projects..." />
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="p-8 bg-white">
          <p>Error fetching projects. Please try again later.</p>
        </div>
      </DashboardLayout>
    );
  }

  const handleDeleteProject = () => {
    if (projectToDelete) {
      deleteProjectMutation.mutate(projectToDelete.id);
      setDeleteModalOpen(false); 
      setProjectToDelete(null);
    }
  };

  const columns = [
    { title: 'Project Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, project) => (
        <>
          <Button onClick={() => router.push(`/projects/${project.id}`)}>View</Button>
          <Button onClick={() => router.push(`/projects/${project.id}/edit`)}>Edit</Button> {/* Route to edit page */}
          <Button
            danger
            onClick={() => {
              setProjectToDelete(project); // Store project to delete
              setDeleteModalOpen(true); // Open confirmation modal
            }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 bg-white">
        <h1 className="text-2xl text-slate-950">Projects Overview</h1>
        <Table columns={columns} dataSource={projects} rowKey="id" />
      </div>

      <Modal
        title={`Delete Project ${projectToDelete?.name}?`}
        visible={isDeleteModalOpen}
        onCancel={() => {
          setDeleteModalOpen(false); 
          setProjectToDelete(null); 
        }}
        onOk={handleDeleteProject} 
      >
        <p>Are you sure you want to delete this project? This action cannot be undone.</p>
      </Modal>
    </DashboardLayout>
  );
};

export default ProjectsOverview;
