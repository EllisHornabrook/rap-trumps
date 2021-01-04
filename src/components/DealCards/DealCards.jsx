import React, { useEffect, useState } from 'react';
import Card from "../Card/Card"
import styles from "./DealCards.module.scss"
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

  const cardVsCardCheck = (option) => {
    let updatedFirstDeck = [...firstDeck];
    let updatedSecondDeck = [...secondDeck];
    let firstTopCard = firstDeck[firstDeck.length-1][`${option}`];
    let secondTopCard = secondDeck[secondDeck.length-1][`${option}`];

    const firstCardValue = (firstTopCard === String) 
      ? firstTopCard = parseInt(firstTopCard.replace(/[,"']/gm, ``).replace(/[.]/gm, `1`).replace(` Million`, ``|` Billion`, `1`))
      : firstTopCard;
    const secondCardValue = (secondTopCard === String) 
    ? secondTopCard = parseInt(secondTopCard.replace(/[,"']/gm, ``).replace(/[.]/gm, `1`).replace(` Million`, ``|` Billion`, `1`))
    : secondTopCard;

    if (firstCardValue > secondCardValue) {
      console.log("FIRST WINS");
      console.log(firstTopCard);
      const wonCard = updatedSecondDeck.pop()
      updatedFirstDeck.unshift(wonCard)
      const frontCard = updatedFirstDeck.pop()
      updatedFirstDeck.unshift(frontCard)
    } else {
      console.log("SECOND WINS");
      console.log(secondTopCard);
      const wonCard = updatedFirstDeck.pop()
      updatedSecondDeck.unshift(wonCard)
      const frontCard = updatedSecondDeck.pop()
      updatedSecondDeck.unshift(frontCard)
    };
    setFirstDeck(updatedFirstDeck);
    setSecondDeck(updatedSecondDeck);
    // (firstTopCard`.${option}` === secondTopCard`.${option}`)
  };
  console.log(firstDeck," first", secondDeck," second");

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
          {secondDeck.map((rapper, index) => <Card key={index} rapper={rapper} />)}
        </div>
      </div>
    </div>
  );
};

export default DealCards;
