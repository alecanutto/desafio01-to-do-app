import { Trash } from '@phosphor-icons/react';
import { ITask } from '../../App';
import styles from './task.module.css';

interface Props {
  task: ITask;
}

export const Task = ({ task }: Props) => {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div></div>
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  );
};
