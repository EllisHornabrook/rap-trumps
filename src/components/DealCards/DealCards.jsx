import React, { useEffect, useState } from 'react';
import Card from "../Card/Card"
import styles from "./DealCards.module.scss"
import { firestore } from '../../firebase';

const DealCards = () => {
  const [rappers, setRappers]= useState([]);
  const [firstDeck, setFirstDeck] = useState([]);
  const [secondDeck, setSecondDeck] = useState([]);

  const getRappers = () => {
    firestore.collection("rappers").get().then((response) => {
        const rappers = response.docs.map(d => d.data());
        console.log(rappers);  
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

  const cardVsCardCheck = (option, firstDeck, secondDeck) => {
    let firstTopCard = firstDeck[0];
    let secondTopCard = secondDeck[0];
    
    if (firstTopCard`.${option}` > secondTopCard`.${option}`) {
      let wonCard = secondDeck.shift()
      firstDeck.push(wonCard)
    } else {
      let wonCard = firstDeck.shift()
      secondDeck.push(wonCard)
    };
    // (firstTopCard`.${option}` === secondTopCard`.${option}`)
  };

  return (
    <div>
      <div>
        <button onClick={() => randomiseDecks()}>Play</button>
      </div>
      <div className={styles.cards}>
        <div className={styles.firstDeck}>
          {firstDeck.map((rapper, index) => <Card key={index} rapper={rapper} cardVsCardCheck={() => cardVsCardCheck({option: null})} />)}
        </div>
        <div className={styles.secondDeck}>
          {secondDeck.map((rapper, index) => <Card key={index} rapper={rapper} />)}
        </div>
      </div>
    </div>
  );
};

export default DealCards;
