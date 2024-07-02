function primeNumber(a) {
  if (a <= 1) {
    return console.log("NO");
  }

  for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        console.log("YES"); 
      }
  }

return console.log("NO");
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
