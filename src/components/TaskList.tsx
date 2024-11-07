import React from "react";
import TaskItem from "./TaskItem";

interface Task {
    id: number;
    task: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle }) => {
    return (
        <ul>
            {tasks.map((t) => (
                <TaskItem key={t.id} {...t} onToggle={onToggle} />
            ))}
        </ul>
    );
};
export default TaskList;