// const compose = (f,g) => (data) => f(g(data));
const compose = (f,g) => (...args) => (f(g(...args)));
const multiCompose = (...fns) => fns.reduce(compose);

const multBy3AndAbs = compose(
  (n) => n*3,
  (n) => Math.abs(n)
);

const multFuncs = multiCompose(
  (n) => n*3,
  (n) => Math.abs(n),
  (n) => n+1
);

const res = multFuncs(-2);
console.log(res);


const multBy = a => { return (b) => a * b}
const multByTen = multBy(10);
multBy(2)(7);