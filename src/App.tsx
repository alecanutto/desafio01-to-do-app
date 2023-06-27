import { useState } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTaks] = useState<ITask[]>([]);

  const addTask = (taskTitle: string) => {
    setTaks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTaskById= (taskId: string) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTaks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} />
    </>
  );
}

export default App;
