{
    let number = parseInt(prompt("Introduce a number: ").trim());
    let operator = prompt("Introduce the operator: [SUMA/RESTA/MULTIPLICACION/DIVISION]").trim().toLowerCase();

    function operate(number, operator) {
        if (!isNaN(number)) {
            let result = number;
            switch (operator) {
                case "suma": {
                    for (let i = number-1; i > 0; i--) { result += i; }
                    console.log("Result from this addition: " + result);
                    break;
                }
                case "resta": {
                    for (let i = number; i > 0; i--) { result -= i; }
                    console.log("Result from this subtraction: " + result);
                    break;
                }
                case "multiplicacion": {
                    for (let i = number; i > 0; i--) { result *= i; }
                    console.log("Result from this multiplication: " + result);
                    break;
                }
                case "division": {
                    for (let i = number; i > 0; i--) { result /= i; }
                    console.log("Result from this division: " + result);
                    break;
                }
                default: console.log("Invalid operator. Only valid operators are: [SUMA/RESTA/MULTIPLICACION/DIVISION]");
            }
        }
        else { console.log("Syntax error."); }
    }

    operate(number, operator);
}