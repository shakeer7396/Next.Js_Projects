'use client';
import React, { useState } from 'react';
import { useTasks } from './TaskContext';

const TaskList = () => {
  const { tasks, deleteTask, editTask } = useTasks();
  const [editId, setEditId] = useState<number | null>(null);
  const [newText, setNewText] = useState('');

  const handleEdit = (id: number, text: string) => {
    setEditId(id);
    setNewText(text);
  };

  const handleSave = (id: number) => {
    editTask(id, newText);
    setEditId(null);
    setNewText('');
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="bg-white p-3 rounded shadow flex justify-between items-center">
          {editId === task.id ? (
            <>
              <input
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="border p-1 rounded mr-2 flex-grow"
              />
              <button onClick={() => handleSave(task.id)} className="text-green-600">💾</button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <div className="space-x-2">
                <button onClick={() => handleEdit(task.id, task.text)}>✏️ Edit</button>
                <button onClick={() => deleteTask(task.id)}>❌ Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
