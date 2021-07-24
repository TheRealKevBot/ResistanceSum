// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, 
// of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of 
// the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).




function seriesResistance(arr) {
    total = 0 
    for(var i = 0; i < arr.length; i++) { 
        total = total + arr[i] 
    } 
    return total > 1 ? total + ' ohms' : total + ' ohm'
}


console.log(seriesResistance([1, 5, 6, 3]), "15 ohms")
console.log(seriesResistance([0.2, 0.3, 0.4]), "0.9 ohm")
console.log(seriesResistance([10,12, 1, 10]), "33 ohms")
console.log(seriesResistance([10,13, 3.8, 20, 10]), "56.8 ohms")
console.log(seriesResistance([0.5, 0.5]), "1 ohm")
console.log(seriesResistance([16, 30, 22.8, 4]), "72.8 ohms")
console.log(seriesResistance([20, 15, 32.5, 2]), "69.5 ohms")
console.log(seriesResistance([52, 22, 20, 30]), "124 ohms")
console.log(seriesResistance([10, 12, 32, 4.9, 5, 6, 71]), "140.9 ohms")