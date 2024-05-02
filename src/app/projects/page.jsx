// "use client"

// import { Table, Button, message } from 'antd';
// import { useQuery } from '@tanstack/react-query';
// import { useRouter } from 'next/navigation';
// import DashboardLayout from '../dashboard/(dashboardLayout)/layout';

// const fetchProjects = async () => {
//   return [
//     { id: 1, name: 'Project Alpha', description: 'Description for Project Alpha' },
//     { id: 2, name: 'Project Beta', description: 'Description for Project Beta' },
//   ];
// };

// const ProjectsOverview = () => {
//   const router = useRouter();

//   const { data: projects, isLoading, error } = useQuery({
//     queryKey: ['projects'],
//     queryFn: fetchProjects,
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching projects</p>;

//   const columns = [
//     { title: 'Project Name', dataIndex: 'name', key: 'name' },
//     { title: 'Description', dataIndex: 'description', key: 'description' },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_, project) => (
//         <>
//           <Button onClick={() => router.push(`/projects/${project.id}`)}>View</Button>
//           <Button>Edit</Button>
//           <Button danger>Delete</Button>
//         </>
//       ),
//     },
//   ];

//   return (
//     <DashboardLayout>
//     <div className="p-8 bg-white">
//       <h1 className="text-2xl text-slate-950">Projects Overview</h1>
//       <Table columns={columns} dataSource={projects} rowKey="id" />
//     </div>
//     </DashboardLayout>
//   );
// };

// export default ProjectsOverview;


"use client";

import { Table, Button, Modal, Spin, message } from 'antd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../dashboard/(dashboardLayout)/layout';
import { useState } from 'react';
import { projectsData } from '@/api/mockData';

// Mock function to fetch projects
const fetchProjects = async () => {
    return projectsData;
  };

// Mock function to delete a project
const deleteProject = async (projectId) => {
    // Ensure this function returns a Promise or has async behavior
    return { success: true, message: `Project with ID ${projectId} deleted successfully.` };
  };
  

const ProjectsOverview = () => {
  const router = useRouter();
//   const queryClient = useQueryClient(); // Query client for data refresh
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  // Query to fetch projects
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  // Mutation to delete a project
  const queryClient = useQueryClient();

  const deleteProjectMutation = useMutation({
    mutationFn: (projectId) => deleteProject(projectId), // Ensure correct usage
    onSuccess: () => {
      message.success('Project deleted successfully.');
      queryClient.invalidateQueries(['projects']); // Invalidate cache after deletion
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
      setDeleteModalOpen(false); // Close modal after deletion
      setProjectToDelete(null); // Reset selected project to delete
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

      {/* Confirmation modal for deletion */}
      <Modal
        title={`Delete Project ${projectToDelete?.name}?`}
        visible={isDeleteModalOpen}
        onCancel={() => {
          setDeleteModalOpen(false); // Close modal without deleting
          setProjectToDelete(null); // Reset selected project
        }}
        onOk={handleDeleteProject} // Call the deletion handler
      >
        <p>Are you sure you want to delete this project? This action cannot be undone.</p>
      </Modal>
    </DashboardLayout>
  );
};

export default ProjectsOverview;
