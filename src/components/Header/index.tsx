import todoLogo from "../../assets/todo-logo.svg";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} />
    </header>
  )
}
