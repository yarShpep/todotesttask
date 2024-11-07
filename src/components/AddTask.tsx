import React, { useState } from 'react';

interface AddTaskProps {
    onAdd: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
    const [task, setTask] = useState('');

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
            onAdd(task.trim());
            setTask('');
        }
    };

    return (
        <form onSubmit={handelSubmit}>
            <input
                type="text"
                placeholder="Add task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Submit</button>
            </form>
    );
};

export default AddTask;

