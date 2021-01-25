import randomiseArray from "./randomiseArray";

const OpponentOption = () => {
    const options = [
        "height",
        "streamNum",
        "years",
        "worth",
        "ability"
    ];
    
    randomiseArray(options);

    return options[0];
};

export default OpponentOption;