console.log(isPrime(18));

function isPrime(number) {
  for (factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}
