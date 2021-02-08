import React from "react";
import styles from "./OptionDisplay.module.scss";

const OptionDisplay = (props) => {
    const { selectedOption } = props;
    const optionValue = selectedOption.value;
    const displaySide = selectedOption.turn === "player" ? styles.playerSide : styles.opponentSide; 

    const cleanedOption = () => {
        let newOption;
        
        if (optionValue === "streamNum") {
            newOption = "Highest Stream";
        } else if (optionValue === "years") {
            newOption = "Years In The Game";
        } else if (optionValue === "worth") {
            newOption = "Net Worth";
        } else if (optionValue === "ability") {
            newOption = "Rap Ability";
        } else {
            newOption = optionValue.charAt(0).toUpperCase() + optionValue.slice(1);
        };
        
        return newOption;
    };

    if (optionValue.length >= 1) {
        return <p className={`${styles.optionDisplay} ${displaySide}`}>"{cleanedOption()}"</p>;
    } else {
        return null;
    };
};

export default OptionDisplay;