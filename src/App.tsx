import React, { useState } from 'react';
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import './App.css'

interface Task {
    id: number;
    task: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: string) => {
        const newTask: Task = {
            id: Date.now(),
            task,
            completed: false
        };
        setTasks([newTask, ...tasks]);
    };

    const toggelTask = (id: number) => {
        setTasks(
            tasks.map((t) => t.id === id ? {...t, completed: !t.completed } : t
            )
        );
    };

    const incompleteTask = tasks.filter((t) => !t.completed);
    const completedTask = tasks.filter((t) => t.completed);

    return (
        <div className="App">
            <h1>ToDo</h1>
            <AddTask onAdd={addTask} />
            <h2>Not completed</h2>
            <TaskList tasks={incompleteTask} onToggle={toggelTask} />
            <h2>Completed</h2>
            <TaskList tasks={completedTask} onToggle={toggelTask} />
        </div>
    );
}

export default App;
