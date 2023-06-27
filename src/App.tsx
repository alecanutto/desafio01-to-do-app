import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const LOCAL_STORAGE_KEY = 'todoapp:savedTasks';

  const loadSavedTasks = () => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const setTaskAndSave = (newTasks: ITask[]) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const addTask = (taskTitle: string) => {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTaskById = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTaskAndSave(newTasks);
  };

  const toggleTaskCompletedByID = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskAndSave(newTasks);
  };

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedByID}
      />
    </>
  );
}

export default App;
