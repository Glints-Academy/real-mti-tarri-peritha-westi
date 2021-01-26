const isPrime = num => {
  // do code here
  let A = 0
  for ( let i = 2; i <= Math.sqrt(num); i++) {
    if (num%i == 0) {
      A
    }
  }
  if (num < 2) {
    return `${num} IS NOT A PRIME`
  } else if (A == 0){
    return `${num} IS A PRIME`
  }
}

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(isPrime(2), '2 IS A PRIME')
test(isPrime(283), '283 IS A PRIME')
test(isPrime(21), '21 IS NOT A PRIME')
test(isPrime(389), '389 IS A PRIME')
test(isPrime(973), '973 IS NOT A PRIME')

