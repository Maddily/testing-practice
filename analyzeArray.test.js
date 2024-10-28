import analyzeArray from './analyzeArray.js';

describe('analyzeArray', () => {
  test('analyzeArray function exists', () => {
    expect(analyzeArray).toBeDefined();
  });

  test('analyzeArray function returns an object with the required properties', () => {
    const input = [1, 8, 3, 4, 2, 6];
    const expected = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };

    expect(analyzeArray(input)).toEqual(expected);
  });

  test('analyzeArray function correctly handles an empty array', () => {
    const input = [];
    const expected = null;

    expect(analyzeArray(input)).toEqual(expected);
  });

  test('analyzeArray function correctly handles an array containing non-numbers', () => {
    const input = [1, 8, null, 4, 2, 6];
    const expected = null;

    expect(analyzeArray(input)).toEqual(expected);
  });

  test('analyzeArray function correctly handles an array of a single number', () => {
    const input = [1];
    const expected = {
      average: 1,
      min: 1,
      max: 1,
      length: 1
    };

    expect(analyzeArray(input)).toEqual(expected);
  });
});
