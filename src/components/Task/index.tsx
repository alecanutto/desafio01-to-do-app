import { Trash } from '@phosphor-icons/react';
import styles from './task.module.css';

export const Task = () => {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div></div>
      </button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        eligendi, laudantium corporis quos molestiae soluta qui veritatis
        mollitia blanditiis cupiditate iure rerum non ducimus minima asperiores
        dolorem officiis nulla illum?
      </p>
      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  );
};
