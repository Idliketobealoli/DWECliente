{
    let number = prompt("Give me an 8 digit number: ").trim();

    function calculateLetter(number) {
        if (number.length !== 8) { console.log("Length of the number must be 8."); }
        else if (isNaN(parseInt(number))) { console.log("Not a number."); }
        else {
            let rest = parseInt(number) % 23;
            let letter;
            switch (rest) {
                case 0: {
                    letter = 'T';
                    break;
                }
                case 1: {
                    letter = 'R';
                    break;
                }
                case 2: {
                    letter = 'W';
                    break;
                }
                case 3: {
                    letter = 'A';
                    break;
                }
                case 4: {
                    letter = 'G';
                    break;
                }
                case 5: {
                    letter = 'M';
                    break;
                }
                case 6: {
                    letter = 'Y';
                    break;
                }
                case 7: {
                    letter = 'F';
                    break;
                }
                case 8: {
                    letter = 'P';
                    break;
                }
                case 9: {
                    letter = 'D';
                    break;
                }
                case 10: {
                    letter = 'X';
                    break;
                }
                case 11: {
                    letter = 'B';
                    break;
                }
                case 12: {
                    letter = 'N';
                    break;
                }
                case 13: {
                    letter = 'J';
                    break;
                }
                case 14: {
                    letter = 'Z';
                    break;
                }
                case 15: {
                    letter = 'S';
                    break;
                }
                case 16: {
                    letter = 'Q';
                    break;
                }
                case 17: {
                    letter = 'V';
                    break;
                }
                case 18: {
                    letter = 'H';
                    break;
                }
                case 19: {
                    letter = 'L';
                    break;
                }
                case 20: {
                    letter = 'C';
                    break;
                }
                case 21: {
                    letter = 'K';
                    break;
                }
                case 22: {
                    letter = 'E';
                    break;
                }
                default: letter = 'T';
            }
            console.log("Result: " + number + letter);
        }
    }

    calculateLetter(number);
}