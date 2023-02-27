import { Division, toDigitArray } from './division';

describe('Division', () => {
  describe('divided by', () => {
    it('should be a digit array', () => {
      const cases: [number, number[]][] = [
        [0, [0]],
        [1, [1]],
        [10, [1, 0]],
        [90, [9, 0]],
        [100, [1, 0, 0]],
        [105, [1, 0, 5]],
      ];
      cases.forEach((a) => {
        const [x, y] = a;
        expect(toDigitArray(x)).toStrictEqual(y);
      });
    });

    it('should be calculated successfully', () => {
      const cases: [number, number][] = [
        [100, 5],
        [105, 5],
        [10, 3],
        [100, 33],
      ];
      cases.forEach((a) => {
        const [dividend, divisor] = a;
        const div = new Division(dividend, divisor);

        const q = (dividend - dividend % divisor) / divisor;
        const r = dividend % divisor;

        expect(div.run()).toStrictEqual([q, r]);
      });
    });

    it('should be calculated like children do', () => {
      const results = Array.from(new Division(705, 6));
      const [_a, _b, c, _d] = results[0];
      expect(c).toBe(6);
    });
  });
});
