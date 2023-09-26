{
    let n1 = parseInt(prompt("Introduce a number: ").trim());
    let n2 = parseInt(prompt("Introduce a number: ").trim());
    let n3 = parseInt(prompt("Introduce a number: ").trim());

    function orderNumbers(n1, n2, n3) {
        if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
            if      (n1 <= n2 && n2 <= n3) { console.log("Ordered numbers: [ " + n3 + ", " + n2 + ", " + n1 + " ]"); } // n1 < n2 < n3
            else if (n1 <= n3 && n3 <= n2) { console.log("Ordered numbers: [ " + n2 + ", " + n3 + ", " + n1 + " ]"); } // n1 < n3 < n2
            else if (n2 <= n1 && n1 <= n3) { console.log("Ordered numbers: [ " + n3 + ", " + n1 + ", " + n2 + " ]"); } // n2 < n1 < n3
            else if (n2 <= n3 && n3 <= n1) { console.log("Ordered numbers: [ " + n1 + ", " + n3 + ", " + n2 + " ]"); } // n2 < n3 < n1
            else if (n3 <= n1 && n1 <= n2) { console.log("Ordered numbers: [ " + n2 + ", " + n1 + ", " + n3 + " ]"); } // n3 < n1 < n2
            else if (n3 <= n2 && n2 <= n1) { console.log("Ordered numbers: [ " + n1 + ", " + n2 + ", " + n3 + " ]"); } // n3 < n2 < n1
            else                           { console.log("default message: [ " + n1 + ", " + n2 + ", " + n3 + " ]"); }
        }
        else {
            console.log("One of the inputted arguments is not a number.");
        }
    }

    orderNumbers(n1, n2, n3);
}