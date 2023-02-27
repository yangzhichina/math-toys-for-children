export class Division {
  constructor(private dividend: number, private divisor: number) {}

  getDividend() {
    return this.dividend;
  }

  getDivisor() {
    return this.divisor;
  }

  getValidator() {
    return new DivisionValidator(this);
  }

  run() {
    const dividendDigits = toDigitArray(this.dividend);

    let dividend = 0;
    let q = 0, r = 0;

    for (let i = 0, len = dividendDigits.length; i < len; ++i) {
      dividend += dividendDigits[i];

      if (dividend === 0) {
        q *= 10;
        continue;
      }

      if (dividend < this.divisor) {
        dividend *= 10;
        continue;
      } else {
        r = dividend % this.divisor;
        q = q * 10 + (dividend - r) / this.divisor;
        dividend = r * 10;
      }
    }

    return [q, r];
  }
}

class DivisionValidator {
  constructor(private dvision: Division) {}

  validate() {
    if (this.dvision.getDividend() < 0 || this.dvision.getDivisor() <= 0) {
      return false;
    }

    return true;
  }
}

export function toDigitArray(num: number) {
  if (num < 0) {
    throw new Error(`${num} is a negative number`);
  }

  if (num === 0) {
    return [0];
  }

  const digits: number[] = [];
  do {
    const r = num % 10;
    digits.unshift(r);
    num = (num - r) / 10;
  } while(num);

  return digits;
}
