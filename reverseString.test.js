import reverseString from './reverseString.js';

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('reverseString function reverses a given string', () => {
  const input = 'hello';
  const expected = 'olleh';

  expect(reverseString(input)).toBe(expected);
});

test('reverseString function works when given a string containing whitespace', () => {
  const input = 'hello world';
  const expected = 'dlrow olleh';

  expect(reverseString(input)).toBe(expected);
});

test('reverseString function works when given a string containing numbers', () => {
  const input = 'hello 5 world';
  const expected = 'dlrow 5 olleh';

  expect(reverseString(input)).toBe(expected);
});

test('reverseString function works when given an empty string', () => {
  const input = '';
  const expected = '';

  expect(reverseString(input)).toBe(expected);
});

test('reverseString function works when passed null', () => {
  const input = null;
  const expected = '';

  expect(reverseString(input)).toBe(expected);
});

test('reverseString function works when passed undefined', () => {
  const input = undefined;
  const expected = '';

  expect(reverseString(input)).toBe(expected);
});
