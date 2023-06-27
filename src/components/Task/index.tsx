import { Trash } from '@phosphor-icons/react';
import { ITask } from '../../App';
import styles from './task.module.css';

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
}

export const Task = ({ task, onDelete }: Props) => {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div></div>
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
};
