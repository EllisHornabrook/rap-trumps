import React, { useState } from 'react';
import Card from "../../containers/Card";
import styles from "./Decks.module.scss";
import CardCount from "../../components/CardCount";
import ResultPanel from "../../components/ResultPanel";
import OpponentTurn from "../../components/OpponentTurn";

const Decks = (props) => {
    const { firstDeck, setFirstDeck, secondDeck, setSecondDeck } = props;
    const [determinedResult, setDeterminedResult] = useState("");
    const [hideDeck, setHideDeck] = useState(true);
    const [blocked, setBlocked] = useState(false);
    const [playerTurn, setPlayerTurn] = useState(true);
    const clickBlocker = blocked || playerTurn === false ? styles.blockPlayer : "";

    const refactorCards = (cardValue) => {
        if (typeof cardValue === "string") {
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
        const opponentOption = OpponentTurn();

        if (firstCardValue > secondCardValue) {
            setPlayerTurn(true);
            changeCards(secondDeck, firstDeck, firstDeck, firstDeck);
            setDeterminedResult("Player");
            setHideDeck(false);
        } else if (secondCardValue > firstCardValue) {
            setPlayerTurn(false);
            changeCards(firstDeck, secondDeck, secondDeck, secondDeck);
            setDeterminedResult("Computer");
            setHideDeck(false);
            handleOpponent(opponentOption);
            console.log('Loss');
            console.log('first', firstDeck.length);
            console.log('second', secondDeck.length);
        } else {
            changeCards(firstDeck, firstDeck, secondDeck, secondDeck);
            setDeterminedResult("Draw");
            setHideDeck(false);
            if (playerTurn === false) {
                handleOpponent(opponentOption);
            };
        };
    };

    const handleOpponent = (opponentOption) => {
        setTimeout(() => {
            if (firstDeck.length >= 1 && secondDeck.length >= 1) {
            cardVsCardCheck(opponentOption);
            console.log('Opponent taken turn');
            };
        }, 7000);
    };

    const moveCards = (moveOne, moveTwo, moveThree, moveFour) => {
        const firstCardUpdate = moveOne.pop();
        moveTwo.unshift(firstCardUpdate);
        const secondCardUpdate = moveThree.pop();
        moveFour.unshift(secondCardUpdate);
    };

    const changeCards = (moveOne, moveTwo, moveThree, moveFour) => {
        setTimeout(() => {
            setHideDeck(true);
            setDeterminedResult("");
        }, 3000);
        setTimeout(() => {
            moveCards(moveOne, moveTwo, moveThree, moveFour);
            setFirstDeck([...firstDeck]);
            setSecondDeck([...secondDeck]);
        }, 3100);
    };

    return (
        <div className={styles.decks}>
            <CardCount firstDeck={firstDeck} secondDeck={secondDeck} />
            <div className={`${styles.firstDeck} ${clickBlocker}`}>
                {firstDeck.map((rapper, index) => (
                    <Card
                        key={index}
                        rapper={rapper}
                        cardVsCardCheck={cardVsCardCheck}
                        setBlocked={setBlocked}
                    />
                ))}
            </div>
            <div className={styles.secondDeck}>
                {secondDeck.map((rapper, index) => (
                    <Card
                        key={index}
                        rapper={rapper}
                        cardVsCardCheck={cardVsCardCheck}
                        hideDeck={hideDeck}
                    />
                ))}
            </div>
            <ResultPanel determinedResult={determinedResult} />
        </div>
    );
};

export default Decks;
