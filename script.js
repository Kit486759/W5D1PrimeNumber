// For a number to be prime, it must meet the following conditions
// Can it be divided by 1? - all numbers can be divided by one, so yes
// can it be divided by itself? - all numbers, divided into themselves once
// Can it be EVENLY divided by any other number? if it can, it can't be prime

let number=9
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        } 
    }
    return true
}
console.log(`if is prime function`)
console.log(`${number} is prime number ? `, isPrime(number))

let range = 200;
function displayPrime(range) {

    for (let start = 2; start < range; start++) {
        if (isPrime(start) === true) {
            console.log(start)
        }
    }
    
}

console.log(`display prime from 2 to ${range} `)
console.log(`${displayPrime(range)}`)


