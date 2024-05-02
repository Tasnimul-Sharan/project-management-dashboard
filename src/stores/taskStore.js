
// import { projectsData } from '@/api/mockData';
// import create from 'zustand';


// const extractAllTasks = (projects) => {
//   return projects.flatMap((project) => project.tasks);
// };


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
