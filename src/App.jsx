import React from 'react';
import styles from "./App.module.scss"
import "./data/fa-library";
import Header from "./components/Header/Header"
import DealCards from "./components/DealCards/DealCards"

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <span>
        <DealCards />
      </span>
    </div>
  );
};

export default App;
