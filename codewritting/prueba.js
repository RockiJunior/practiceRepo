function solution(n) {
  let count = 0;
  let list = [];
  let toString = n.toString();
  for (let i = 0; i < toString.length; i++) {
    const num1 = Number(toString.charAt(i));
    list.push(num1);
    count = count + num1;
  }
  const suma = list.reduce((a, b) => a + b);
  return suma;
}

solution(29);
