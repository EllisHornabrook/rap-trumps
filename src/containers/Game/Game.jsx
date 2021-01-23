import React, { useState } from "react";
import styles from "./RunGame.module.scss";
import Title from "./components/Title";
import Decks from "./containers/Decks";

const Game = (props) => {
    const { rappers, getRappers, handleRandomise } = props;
    const [firstDeck, setFirstDeck] = useState([]);
    const [secondDeck, setSecondDeck] = useState([]);
    const [gameBegin, setGameBegin] = useState(false);
    const [gameWinner, setGameWinner] = useState('');

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
                    <Title
                        headerOne={'YOU LOST...'}
                        btnContent={'Try Again'}
                        setDecks={setDecks}
                    />
                );
            } else if (gameWinner === 'player') {
                return (
                    <Title
                        headerOne={'YOU WON!'}
                        btnContent={'Play Again'}
                        setDecks={setDecks}
                    />
                );
            } else {
                return (
                    <Decks
                        firstDeck={firstDeck}
                        secondDeck={secondDeck}
                        setFirstDeck={setFirstDeck}
                        setSecondDeck={setSecondDeck}
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
                    />
                </>
            );
        };
    };
    
    const endGame = () => {
        if (firstDeck.length <= 0 && secondDeck.length >= 1) {
            setGameWinner('computer');
        } else if (secondDeck.length <= 0 && firstDeck.length >= 1) {
            setGameWinner('player');
        } else {
            setGameWinner('');
        };
    };
    useEffect(endGame,[firstDeck]);
    
    return (
        <div className={styles.app}>
            {runGame()}
        </div>
    );
};

export default Game;