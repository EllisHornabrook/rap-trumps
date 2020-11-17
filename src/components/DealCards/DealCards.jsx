import React, { useEffect, useState } from 'react';
import Card from "../Card/Card"
import styles from "./DealCards.module.scss"
import { firestore } from '../../firebase';

const DealCards = () => {

  const [rappers, setRappers] = useState([]);

  const getRappers = () => {
    firestore.collection("rappers").get().then((response) => {
        const rappers = response.docs.map(d => d.data());
        console.log(rappers);  
        setRappers(rappers);    
      }).catch((err) => console.error(err));
    }
    useEffect(getRappers,[])

  const map = rappers.map(rapper => <Card key={rappers.idRapper} rapper={rapper} />);

  const firstDeck = map.slice(0, 4)
  const secondDeck = map.slice(4, 9)

  return (
    <div className={styles.cards}>
      <div className={styles.firstDeck}>{firstDeck}</div>
      <div className={styles.secondDeck}>{secondDeck}</div>
    </div>
  );
};

export default DealCards;



// // sort by value
// items.sort(function (a, b) {
//   return a.value - b.value;
// });