import React from 'react';

interface TaskItemProps {
    id: number;
    task: string;
    completed: boolean;
    onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({id, task, completed, onToggle}) => {
    return (
        <li
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                cursor: 'pointer',
            }}
            onClick={() => onToggle(id)}
        >{task}</li>
    );
};

export default TaskItem;