'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type Task = {
  id: number;
  text: string;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) =>
    setTasks((prev) => [...prev, { id: Date.now(), text }]);

  const deleteTask = (id: number) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const editTask = (id: number, newText: string) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within TaskProvider');
  return context;
};
