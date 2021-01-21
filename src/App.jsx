import React, { useEffect, useState } from 'react';
import styles from "./App.module.scss";
import { firestore } from './firebase';
import "./data/fa-library";
import Title from "./components/Title";
import Decks from "./components/Decks";

const App = () => {
    const [rappers, setRappers] = useState([]);
    const [firstDeck, setFirstDeck] = useState([]);
    const [secondDeck, setSecondDeck] = useState([]);
    const [gameBegin, setGameBegin] = useState(false);
    const [gameWinner, setGameWinner] = useState('');

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

    const runGame = () => {
        if (gameBegin === true) {
            if (gameWinner === 'computer') {
                return (
                    <Title headerOne={'YOU LOST...'} btnContent={'Try Again'} setDecks={setDecks} />
                );
            } else if (gameWinner === 'player') {
                return (
                    <Title headerOne={'YOU WON!'} btnContent={'Play Again'} setDecks={setDecks} />
                );
            } else {
                return (
                    <Decks firstDeck={firstDeck} secondDeck={secondDeck} setFirstDeck={setFirstDeck} setSecondDeck={setSecondDeck} />
                );
            };
        } else {
            return (
                <>
                    <Title headerOne={'RAP'} headerTwo={'TRUMPS'} btnContent={'Play'} setDecks={setDecks} />
                </>
            );
        };
    };

    const endCheck = () => {
        if (firstDeck.length <= 0 && secondDeck.length >= 1) {
            setGameWinner('computer');
        } else if (secondDeck.length <= 0 && firstDeck.length >= 1) {
            setGameWinner('player');
        } else {
            setGameWinner('');
        };
    };
    useEffect(endCheck,[firstDeck]);

    return (
        <div className={styles.app}>
            {runGame()}
        </div>
    );
};

export default App;
