import React, { useEffect, useState } from 'react';
import styles from "./App.module.scss";
import { firestore } from './firebase';
import "./data/fa-library";
import Game from "./containers/Game";

const App = () => {
    const [rappers, setRappers] = useState([]);
    const [gameBegin, setGameBegin] = useState(false);
    const [firstDeck, setFirstDeck] = useState([]);
    const [secondDeck, setSecondDeck] = useState([]);

    const getRappers = () => {
        firestore
            .collection("rappers")
            .get()
            .then((response) => {
                const rappers = response.docs.map((d) => d.data());  
                setRappers(rappers);    
            })
            .catch((err) => console.error(err));
    };
    useEffect(getRappers, []);

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

    const setDecks = () => {
        getRappers();
        const randomisedDecks = handleRandomise(rappers);
        setFirstDeck(randomisedDecks.splice(0, Math.floor(randomisedDecks.length / 2)));
        setSecondDeck(randomisedDecks);
        setGameBegin(true);
    };

    return (
        <div className={styles.app}>
            <Game
                setDecks={setDecks}
                gameBegin={gameBegin}
                firstDeck={firstDeck}
                setFirstDeck={setFirstDeck}
                secondDeck={secondDeck}
                setSecondDeck={setSecondDeck}
            />
        </div>
    );
};

export default App;
