'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTasks } from './TaskContext';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const { addTask } = useTasks();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder={t('enterTask')}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {t('add')}
      </button>
    </form>
  );
};

export default TaskInput;
