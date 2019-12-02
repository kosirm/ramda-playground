const R = require("ramda");
const L = console.log;

L(R.add(2, 5));
L(R.subtract(5, 2));

let res = R.add(R.add(2, 5), R.subtract(2, 10));
L(res);

const double = x => x * 2;
L(double(5));

const myArray = [1, 2, 3, 4, 5];
R.forEach(value => L("Hello: " + value), myArray);

console.log(R.map(x => x * 2, myArray));
R.forEach(value => L(R.map(x => double, myArray)));

const isEven = n => n % 2 === 0;

L(R.filter(isEven, [1, 2, 3, 4]));
L(R.filter(R.complement(isEven), [1, 2, 3, 4]));
L(R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }) /*=> {b: 2, d: 4}*/);
L(R.reject(isEven, [1, 2, 3, 4])); // 1.3
L(R.find(isEven, [1, 2, 3, 4])); // 2

const add = (a, b) => a + b;
L(R.reduce(add, 25, myArray));
