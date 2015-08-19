function isEven(n) {
  
  return (n & 1) == false ;
}

function isOdd(n) {
  return (n & 1)== true;
}

function halfAndFloor(n) {
  return (n >> 1)|0;
}

function isPowerOfTwo(n){
     return (n != 0) && ((n & (n - 1)) == 0);
}

function nthPowerOfTwo(n) {
  return 1 << n;
}

function truncate(n) {
  return n | 0;
}

function abs(n) {
  return (n ^ (n >> 31)) - (n >> 31);
}
