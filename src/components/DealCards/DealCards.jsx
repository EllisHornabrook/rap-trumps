import React, { useEffect, useState } from 'react';
import Card from "../Card/Card";
import styles from "./DealCards.module.scss";
import { firestore } from '../../firebase';

const DealCards = () => {
  const [rappers, setRappers] = useState([]);
  const [firstDeck, setFirstDeck] = useState([]);
  const [secondDeck, setSecondDeck] = useState([]);

  const getRappers = () => {
    firestore.collection("rappers").get().then((response) => {
        const rappers = response.docs.map(d => d.data());  
        setRappers(rappers);    
    }).catch((err) => console.error(err));
  };
  useEffect(getRappers,[]);

  const handleRandomise = (array) => {    
    let l = array.length, temp, i;  
    while (l > 0) {  
        i = Math.floor(Math.random() * l);
        l--;  
        temp = array[l];          
        array[l] = array[i];
        array[i] = temp;      
    };
    return array;
  };

  const randomiseDecks = () => {
    getRappers();
    const randomisedDecks = handleRandomise(rappers);
    setFirstDeck(randomisedDecks.splice(0, Math.floor(randomisedDecks.length / 2)));
    setSecondDeck(randomisedDecks);
  };

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
      console.log("FIRST WINS");
      console.log(firstCardValue);
      moveCards(secondDeck, firstDeck, firstDeck, firstDeck);
    } else if (secondCardValue > firstCardValue) {
      console.log("SECOND WINS");
      console.log(secondCardValue);
      moveCards(firstDeck, secondDeck, secondDeck, secondDeck);
    } else {
      console.log("DRAW");
      moveCards(firstDeck, firstDeck, secondDeck, secondDeck);
    };

    setFirstDeck([...firstDeck]);
    setSecondDeck([...secondDeck]);
  };

  return (
    <div>
      <div>
        <button onClick={() => randomiseDecks()}>Play</button>
      </div>
      <div className={styles.cards}>
        <div className={styles.firstDeck}>
          {firstDeck.map((rapper, index) => <Card key={index} rapper={rapper} cardVsCardCheck={cardVsCardCheck} />)}
        </div>
        <div className={styles.secondDeck}>
          {secondDeck.map((rapper, index) => <Card key={index} rapper={rapper} cardVsCardCheck={cardVsCardCheck} />)}
        </div>
      </div>
    </div>
  );
};

export default DealCards;
