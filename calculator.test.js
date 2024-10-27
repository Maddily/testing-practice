import calculator from './calculator.js';

describe('calculator', () => {
  test('calculator object exists', () => {
    expect(calculator).toBeDefined();
  });

  test('calculator object contains add method', () => {
    expect(calculator.add).toBeDefined();
  });

  test('calculator object contains subtract method', () => {
    expect(calculator.subtract).toBeDefined();
  });

  test('calculator object contains divide method', () => {
    expect(calculator.divide).toBeDefined();
  });

  test('calculator object contains multiply method', () => {
    expect(calculator.multiply).toBeDefined();
  });

  describe('calculator.add', () => {
    test('add method adds the two given numbers', () => {
      const input = [2, 6];
      const expected = 8;

      expect(calculator.add(...input)).toBe(expected);
    });

    test('add method works when passed NaN', () => {
      const input = [NaN, 6];

      expect(calculator.add(...input)).toBeNaN();
    });

    test('add method works when passed null', () => {
      const input = [null, 6];
      const expected = 6;

      expect(calculator.add(...input)).toBe(expected);
    });

    test('add method works when passed undefined', () => {
      const input = [undefined, 6];

      expect(calculator.add(...input)).toBeNaN();
    });

    test('add method works when passed strings', () => {
      const input = ['2', '6'];
      const expected = 8;

      expect(calculator.add(...input)).toBe(expected);
    });

    test('add method works with floating point numbers', () => {
      const input = [1.2, 6.9];
      const expected = 8.1;

      expect(calculator.add(...input)).toBe(expected);
    });
  });

  describe('calculator.subtract', () => {
    test('subtract method subtracts the two given numbers', () => {
      const input = [8, 2];
      const expected = 6;

      expect(calculator.subtract(...input)).toBe(expected);
    });

    test('subtract method works when passed NaN', () => {
      const input = [NaN, 6];

      expect(calculator.subtract(...input)).toBeNaN();
    });

    test('subtract method works when passed null', () => {
      const input = [null, 6];
      const expected = -6;

      expect(calculator.subtract(...input)).toBe(expected);
    });

    test('subtract method works when passed undefined', () => {
      const input = [undefined, 6];

      expect(calculator.subtract(...input)).toBeNaN();
    });

    test('subtract method works when passed strings', () => {
      const input = ['2', '6'];
      const expected = -4;

      expect(calculator.subtract(...input)).toBe(expected);
    });

    test('subtract method works with floating point numbers', () => {
      const input = [-1.2, -6.9];
      const expected = 5.7;

      expect(calculator.subtract(...input)).toBe(expected);
    });
  });

  describe('calculator.divide', () => {
    test('divide method divides the two given numbers', () => {
      const input = [8, 2];
      const expected = 4;

      expect(calculator.divide(...input)).toBe(expected);
    });

    test('divide method works when passed NaN', () => {
      const input = [NaN, 6];

      expect(calculator.divide(...input)).toBeNaN();
    });

    test('divide method works when passed null', () => {
      let input = [null, 6];
      let expected = 0;

      expect(calculator.divide(...input)).toBe(expected);

      input = [6, null];
      expected = Infinity;

      expect(calculator.divide(...input)).toBe(expected);
    });

    test('divide method works when passed undefined', () => {
      const input = [undefined, 6];

      expect(calculator.divide(...input)).toBeNaN();
    });

    test('divide method works when passed strings', () => {
      const input = ['2', '6'];
      const expected = 1 / 3;

      expect(calculator.divide(...input)).toBe(expected);
    });

    test('divide method works with floating point numbers', () => {
      const input = [6.9, 1.2];
      const expected = 6.9 / 1.2;

      expect(calculator.divide(...input)).toBe(expected);
    });

    test('divide method works when the divisor is zero', () => {
      const input = [6, 0];
      const expected = Infinity;

      expect(calculator.divide(...input)).toBe(expected);
    });

    test('divide method works when both of the numbers are zero', () => {
      const input = [0, 0];
      const expected = NaN;

      expect(calculator.divide(...input)).toBe(expected);
    });
  });

  describe('calculator.multiply', () => {
    test('multiply method multiplies the two given numbers', () => {
      const input = [8, 2];
      const expected = 16;

      expect(calculator.multiply(...input)).toBe(expected);
    });

    test('multiply method works when passed NaN', () => {
      const input = [NaN, 6];

      expect(calculator.multiply(...input)).toBeNaN();
    });

    test('multiply method works when passed null', () => {
      const input = [null, 6];
      const expected = 0;

      expect(calculator.multiply(...input)).toBe(expected);
    });

    test('multiply method works when passed undefined', () => {
      const input = [undefined, 6];

      expect(calculator.multiply(...input)).toBeNaN();
    });

    test('multiply method works when passed strings', () => {
      const input = ['2', '6'];
      const expected = 12;

      expect(calculator.multiply(...input)).toBe(expected);
    });

    test('multiply method works with floating point numbers', () => {
      const input = [1.2, 2];
      const expected = 2.4;

      expect(calculator.multiply(...input)).toBe(expected);
    });
  });
});
