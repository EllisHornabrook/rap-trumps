import React, { useState, useEffect } from "react";
import styles from "./Game.module.scss";
import Title from "../../components/Title";
import Decks from "../Decks";

const Game = (props) => {
    const {
        setDecks,
        gameBegin,
        firstDeck,
        setFirstDeck,
        secondDeck,
        setSecondDeck 
    } = props;
    const [gameWinner, setGameWinner] = useState('');
    const [blocked, setBlocked] = useState(false);
   
    const runGame = () => {
        if (gameBegin === true) {
            if (gameWinner === 'opponent') {
                return (
                    <Title
                        headerOne={'YOU LOST...'}
                        btnContent={'Try Again'}
                        setDecks={setDecks}
                        setGameWinner={setGameWinner}
                    />
                );
            } else if (gameWinner === 'player') {
                return (
                    <Title
                        headerOne={'YOU WON!'}
                        btnContent={'Play Again'}
                        setDecks={setDecks}
                        setGameWinner={setGameWinner}
                    />
                );
            } else {
                return (
                    <Decks
                        firstDeck={firstDeck}
                        secondDeck={secondDeck}
                        setFirstDeck={setFirstDeck}
                        setSecondDeck={setSecondDeck}
                        blocked={blocked}
                        setBlocked={setBlocked}
                    />
                );
            };
        } else {
            return (
                <>
                    <Title
                        headerOne={'RAP'}
                        headerTwo={'TRUMPS'}
                        btnContent={'Play'}
                        setDecks={setDecks}
                        setGameWinner={setGameWinner}
                    />
                </>
            );
        };
    };
    
    const endGame = () => {
        if (firstDeck.length <= 0 && secondDeck.length >= 1) {
            setGameWinner('opponent');
        } else if (secondDeck.length <= 0 && firstDeck.length >= 1) {
            setGameWinner('player');
        } else {
            setGameWinner('');
        };
    };

    useEffect(endGame, [blocked]);
    
    return (
        <div className={styles.app}>
            {runGame()}
        </div>
    );
};

export default Game;