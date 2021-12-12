const fs = require('fs');

const [A, B, C] = JSON.parse(fs.readFileSync('input'));

function getA() {
  return A;
}

function getB(callback) {
  setTimeout(() => {
      callback(B);
  }, 10);
}

function getC() {
  return Promise.resolve().then(() => C);
}

function getABC() {
    Promise.all([
        getA(),
        getB(()=>resolve()),
        getC()
    ]).then(()=> console.log('esto se termno'))
}

getABC().then((arr) => console.log(arr));
