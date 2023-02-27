import { Division } from './division';

const divisors = [2, 3, 4, 5, 6, 7, 8, 9];
const results: [number, number][] = [];

for (let x = 10; x < 100; ++x) {
  const dividend = x * 10 + 5;

  divisors.forEach((divisor) => {
    const div = new Division(dividend, divisor);
    const calcSteps = Array.from(div);

    if (calcSteps.length > 2) {
      const [_a, _b, c, d] = calcSteps[0];
      const [nd]           = calcSteps[1];
      const [_w, x, _y, z] = calcSteps[calcSteps.length - 1];

      if (c === 6 && d === 1 && nd < 12 && x>= 100 && z === 3) {
        results.push([dividend, divisor]);
      }
    }
  });
}

console.log(results);
