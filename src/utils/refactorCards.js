const RefactorCards = (cardValue) => {
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

export default RefactorCards;