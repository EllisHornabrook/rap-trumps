import React from "react";
import styles from "./CardFront.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardFront = (props) => {
    const { image, name, height, streamNum, stream, years, date, worth, ability } = props.rapper;
    const { cardVsCardCheck, handleBlocker } = props;

    return (
        <div className={styles.cardFront}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <div className={styles.options}>
                <span onClick={() => {cardVsCardCheck("height", "player"); handleBlocker();}}>
                    <p>
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-right"} />
                        {" "}Height{" "}
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} />
                    </p>
                    <p>{height}</p>
                </span>
                <span onClick={() => {cardVsCardCheck("streamNum", "player"); handleBlocker();}}>
                    <p>
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-right"} />
                        {" "}Highest Stream{" "}
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} />
                    </p>
                    <p>{streamNum} - "{stream}"</p>
                </span>
                <span onClick={() => {cardVsCardCheck("years", "player"); handleBlocker();}}>
                    <p>
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-right"} />
                        {" "}Years In The Game{" "}
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} />
                    </p>
                    <p>{years} - ({date})</p>
                </span>
                <span onClick={() => {cardVsCardCheck("worth", "player"); handleBlocker();}}>
                    <p>
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-right"} />
                        {" "}Net Worth{" "}
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} />
                    </p>
                    <p>${worth}</p>
                </span>
                <span onClick={() => {cardVsCardCheck("ability", "player"); handleBlocker();}}>
                    <p>
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-right"} />
                        {" "}Rap Ability{" "}
                        <FontAwesomeIcon className={styles.fontA} icon={"angle-left"}/>
                    </p>
                    <p>{ability}/10</p>
                </span>
            </div>
        </div>
    );
};

export default CardFront;
