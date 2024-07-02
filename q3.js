function primeNumber(a) {
    if (a <= 1) {
        return console.log("NO");
    }
    for (var i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return console.log("NO");
        }
    }
    return console.log("YES");
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
