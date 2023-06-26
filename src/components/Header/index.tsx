import { PlusCircle } from "@phosphor-icons/react";
import todoLogo from "../../assets/todo-logo.svg";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
