import capitalize from './capitalize.js';

test('capitalize function exists', () => {
  expect(capitalize).toBeDefined();
});

test('capitalize returns the given string with the first character capitalized', () => {
  const input = 'hello';
  const expected = 'Hello';

  expect(capitalize(input)).toBe(expected);
});

test('capitalize works when passed an empty string', () => {
  const input = '';
  const expected = '';

  expect(capitalize(input)).toBe(expected);
});

test('capitalize works when passed null', () => {
  const input = null;
  const expected = '';

  expect(capitalize(input)).toBe(expected);
});

test('capitalize works when passed undefined', () => {
  const input = undefined;
  const expected = '';

  expect(capitalize(input)).toBe(expected);
});

test('capitalize works when passed a string starting with a non-alphabet character', () => {
  const input = '1hello';
  const expected = '1hello';

  expect(capitalize(input)).toBe(expected);
});
