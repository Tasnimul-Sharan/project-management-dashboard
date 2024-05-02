// import create from 'zustand';

// // Zustand store for task management
// const useTaskStore = create((set) => ({
//   tasks: [
//     { id: 1, name: 'Task 1', status: 'To Do', description: 'Task 1 description', deadline: '2024-01-01', assignee: 'Team Member 1' },
//     { id: 2, name: 'Task 2', status: 'In Progress', description: 'Task 2 description', deadline: '2024-02-01', assignee: 'Team Member 2' },
//     { id: 3, name: 'Task 3', status: 'Done', description: 'Task 3 description', deadline: '2023-12-01', assignee: 'Team Member 3' },
//   ],
//   addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
//   updateTask: (task) => set((state) => {
//     const updatedTasks = state.tasks.map((t) => (t.id === task.id ? task : t));
//     return { tasks: updatedTasks };
//   }),
//   changeTaskStatus: (taskId, newStatus) => set((state) => {
//     const updatedTasks = state.tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t));
//     return { tasks: updatedTasks };
//   }),
// }));

// export default useTaskStore;

// import { projectsData } from '@/api/mockData';
// import create from 'zustand';

// // Utility to extract all tasks from projectsData
// const extractAllTasks = (projects) => {
//   return projects.flatMap((project) => project.tasks);
// };

// // Zustand store for task management
// const useTaskStore = create((set) => ({
//   tasks: extractAllTasks(projectsData), 
//   addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
//   updateTask: (task) => set((state) => {
//     const updatedTasks = state.tasks.map((t) => (t.id === task.id ? task : t));
//     return { tasks: updatedTasks };
//   }),
//   changeTaskStatus: (taskId, newStatus) => set((state) => {
//     const updatedTasks = state.tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t));
//     return { tasks: updatedTasks };
//   }),
// }));

// export default useTaskStore;

/////////////////


// import { create } from 'zustand';
// import { projectsData } from '@/api/mockData';

// const extractTasksForProject = (projectId) => {
//   const project = projectsData.find((p) => p.id === parseInt(projectId, 10));
//   if (project) {
//     return project.tasks;
//   } else {
//     throw new Error(`Project with ID ${projectId} not found`);
//   }
// };

// const useTaskStore = (projectId) => {
//   if (!projectId) {
//     throw new Error('Project ID is required'); 
//   }

//   return create((set) => ({
//     tasks: extractTasksForProject(projectId), 
//     addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })), 
//     updateTask: (task) => set((state) => {
//       const updatedTasks = state.tasks.map((t) => (t.id === task.id ? task : t));
//       return { tasks: updatedTasks }; 
//     }),
//     changeTaskStatus: (taskId, newStatus) => set((state) => {
//       const updatedTasks = state.tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t));
//       return { tasks: updatedTasks }; 
//     }),
//   }));
// };

// export default useTaskStore;


import { projectsData } from '@/api/mockData';
import { create } from 'zustand';

// Utility to extract tasks for a specific project ID
const extractProjectTasksById = (id) => {
  const project = projectsData.find((p) => p.id == id); // Ensure correct comparison
  if (project) {
    return project.tasks; 
  } else {
    throw new Error(`Project with ID ${id} not found`); 
  }
};

const useTaskStore = (id) => {
  if (!id) {
    throw new Error('Project ID is required'); 
  }

  return create((set) => ({
    tasks: extractProjectTasksById(id),
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })), 
    updateTask: (task) => set((state) => {
      const updatedTasks = state.tasks.map((t) => (t.id === task.id ? task : t));
      return { tasks: updatedTasks }; 
    }),
    changeTaskStatus: (taskId, newStatus) => set((state) => {
      const updatedTasks = state.tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t));
      return { tasks: updatedTasks };
    }),
  }));
};

export default useTaskStore;
