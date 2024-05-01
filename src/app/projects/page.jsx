"use client"
// import { Table, Button, message } from 'antd';
// import { useQuery } from '@tanstack/react-query';
// import { useRouter } from 'next/navigation';

// const fetchProjects = async () => {

//   return [
//     { id: 1, name: 'Project Alpha', description: 'Description for Project Alpha' },
//     { id: 2, name: 'Project Beta', description: 'Description for Project Beta' },
//   ];
// };

// const ProjectsOverview = () => {
//   const router = useRouter();
//   const { data: projects, isLoading, error } = useQuery(['projects'], fetchProjects);

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
//     <div className="p-8">
//       <h1 className="text-2xl">Projects Overview</h1>
//       <Table columns={columns} dataSource={projects} rowKey="id" />
//     </div>
//   );
// };

// export default ProjectsOverview;


import { Table, Button, message } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../dashboard/(dashboardLayout)/layout';

// A function to fetch project data
const fetchProjects = async () => {
  return [
    { id: 1, name: 'Project Alpha', description: 'Description for Project Alpha' },
    { id: 2, name: 'Project Beta', description: 'Description for Project Beta' },
  ];
};

const ProjectsOverview = () => {
  const router = useRouter();

  // Corrected version of useQuery, using an object to pass options
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching projects</p>;

  // Columns for the Ant Design Table
  const columns = [
    { title: 'Project Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, project) => (
        <>
          <Button onClick={() => router.push(`/projects/${project.id}`)}>View</Button>
          <Button>Edit</Button>
          <Button danger>Delete</Button>
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
    </DashboardLayout>
  );
};

export default ProjectsOverview;
