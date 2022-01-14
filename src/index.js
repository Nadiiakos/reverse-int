module.exports = function reverse (n) {
  let pos = Math.abs(n);
  let str = (String(pos).split('').reverse().join(''));
  return +str;
}
