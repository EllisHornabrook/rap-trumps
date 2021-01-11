import React, { useState } from 'react';
import Card from "../Card/Card";
import styles from "./Decks.module.scss";
import ResultPanel from "../ResultPanel"

const Decks = (props) => {
  const [determinedResult, setDeterminedResult] = useState("");
  const firstDeck = props.firstDeck;
  const secondDeck = props.secondDeck;

  const moveCards = (moveOne, moveTwo, moveThree, moveFour) => {
    const firstCardUpdate = moveOne.pop();
    moveTwo.unshift(firstCardUpdate);
    const secondCardUpdate = moveThree.pop();
    moveFour.unshift(secondCardUpdate);
  };

  const refactorCards = (cardValue) => {
    if (typeof(cardValue) === "string") {
      return parseFloat(
        cardValue
          .replace(`.`, `1`)
          .replace(`10"`, `9.1`)
          .replace(`11"`, `9.2`)
          .replace(` Million`, ``)
          .replace(` Billion`, `1`)
          .replace(/[,"']/gm, ``)
        );
    } else {
      return cardValue;
    };
  };

  const cardVsCardCheck = (option) => {
    const firstCardValue = refactorCards(firstDeck[firstDeck.length-1][`${option}`]);
    const secondCardValue = refactorCards(secondDeck[secondDeck.length-1][`${option}`]);

    if (firstCardValue > secondCardValue) {
      moveCards(secondDeck, firstDeck, firstDeck, firstDeck);
      setDeterminedResult("Player")
    } else if (secondCardValue > firstCardValue) {
      moveCards(firstDeck, secondDeck, secondDeck, secondDeck);
      setDeterminedResult("Computer")
    } else {
      moveCards(firstDeck, firstDeck, secondDeck, secondDeck);
      setDeterminedResult("Draw")
    };

    props.setFirstDeck([...firstDeck]);
    props.setSecondDeck([...secondDeck]);
  };

  return (
    <div className={styles.cards}>
      <div className={styles.firstDeck}>
        {props.firstDeck.map((rapper, index) => <Card key={index} rapper={rapper} cardVsCardCheck={cardVsCardCheck} />)}
      </div>
      <div className={styles.secondDeck}>
        {props.secondDeck.map((rapper, index) => <Card key={index} rapper={rapper} cardVsCardCheck={cardVsCardCheck} />)}
      </div>
      <ResultPanel determinedResult={determinedResult} />
    </div>
  );
};

export default Decks;
