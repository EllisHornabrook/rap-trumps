const MoveCards = (moveOne, moveTwo, moveThree, moveFour) => {
    const firstCardUpdate = moveOne.pop();
    moveTwo.unshift(firstCardUpdate);
    const secondCardUpdate = moveThree.pop();
    moveFour.unshift(secondCardUpdate);
};

export default MoveCards;