'use client';
import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import ApiFetch from './ApiFetch';
import { TaskProvider } from './TaskContext';

const Final = () => {
  return (
    <TaskProvider>
      <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Task Manager</h2>
        <TaskInput />
        <TaskList />
        <ApiFetch />
      </div>
    </TaskProvider>
  );
};

export default Final;
