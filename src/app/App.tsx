import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";

export const App = memo(() => (
  <main className={styles.main}>
    <div className={styles.container}>
      <Outlet />
    </div>
  </main>
));
