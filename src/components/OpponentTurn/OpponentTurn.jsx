const OpponentTurn = () => {
    const options = ["height", "streamNum", "years", "worth", "ability"];

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
    
    handleRandomise(options);

    return options[0];
};

export default OpponentTurn;