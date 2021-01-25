import React from "react";
import styles from "./Title.module.scss";

const Title = (props) => {
    const { headerOne, headerTwo, btnContent, setDecks, setGameWinner } = props;

    return (
        <div className={styles.titleBackground}>
            <div className={styles.titleContainer}>
                <div className={styles.titleEffect}>
                    <h1>{headerOne}</h1>
                    <h1>{headerTwo}</h1>
                    <button className={styles.playBtn} onClick={() => {setDecks(); setGameWinner('');}}>{btnContent}</button>
                </div>
            </div>
        </div>
    );
};

export default Title;