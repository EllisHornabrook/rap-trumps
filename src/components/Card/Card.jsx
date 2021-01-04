import React, { useState } from "react";
import styles from "./Card.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
    const [chosenAttribute, setChosenAttribute] = useState([]);
    const { image, name, height, streamNum, stream, years, date, worth, ability } = props.rapper;

    const handleClickedValue = (selectedAttribute) => {
        setChosenAttribute(selectedAttribute)
        props.cardVsCardCheck({option: chosenAttribute})
    };

    return (
        <div className={styles.card}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <div className={styles.options}>
                <span onClick={() => handleClickedValue((parseInt(height.replace(`'`, ``).replace(`"`, ``))))}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Height <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>{height}</p>
                </span>
                <span onClick={() => handleClickedValue((parseInt(streamNum.replaceAll(`,`, ``))))}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Highest Stream <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>{streamNum} - "{stream}"</p>
                </span>
                <span onClick={() => handleClickedValue(years)}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Years In The Game <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>{years} - ({date})</p>
                </span>
                <span onClick={() => handleClickedValue((parseInt(worth.replace(` Million`, ``).replace(` Billion`, `0`).replace(`.` , `0`))))}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Net Worth <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>${worth}</p>
                </span>
                <span onClick={() => handleClickedValue(ability)}>
                    <p><FontAwesomeIcon className={styles.fontA} icon={"angle-right"} /> Rap Ability <FontAwesomeIcon className={styles.fontA} icon={"angle-left"} /></p>
                    <p>{ability}/10</p>
                </span>
            </div>
        </div>
    );
};

export default Card;