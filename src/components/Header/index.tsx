import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import todoLogo from '../../assets/todo-logo.svg';

import styles from './header.module.css';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export const Header = ({ onAddTask }: Props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  } 

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="Adicione uma nova tarefa" onChange={onChangeTitle} value={title} />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};
