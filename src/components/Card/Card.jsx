import React, { useState } from "react";
import styles from "./Card.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
    const { image, name, height, streamNum, stream, years, date, worth, ability } = props.rapper;

    const handleClickedValue = (option) => {
        props.cardVsCardCheck(option)
    };

    return (
        <div className={styles.card}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <div className={styles.options}>
                <span onClick={() => handleClickedValue("height")}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Height <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>{height}</p>
                </span>
                <span onClick={() => handleClickedValue("streamNum")}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Highest Stream <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>{streamNum} - "{stream}"</p>
                </span>
                <span onClick={() => handleClickedValue("years")}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Years In The Game <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>{years} - ({date})</p>
                </span>
                <span onClick={() => handleClickedValue("worth")}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Net Worth <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>${worth}</p>
                </span>
                <span onClick={() => handleClickedValue("ability")}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Rap Ability <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>{ability}/10</p>
                </span>
            </div>
        </div>
    );
};

export default Card;