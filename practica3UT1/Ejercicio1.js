{
    let number = prompt("Give me an 8 digit number: ").trim();
    calculateLetter(number);

    function calculateLetter(number) {
        let letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        if (number.length !== 8) { console.log("Length of the number must be 8."); }
        else if (isNaN(parseInt(number))) { console.log("Not a number."); }
        else {
            let rest = parseInt(number) % 23;
            let letter = letters.charAt(rest);
            console.log("Result: " + number + letter);
        }
    }
}