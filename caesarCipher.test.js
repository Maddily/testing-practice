import caesarCipher from './caesarCipher.js';

describe('caesarCipher', () => {
  test('caesarCipher function exists', () => {
    expect(caesarCipher).toBeDefined();
  });

  test('caesarCipher function correctly shifts each character in a given string', () => {
    const input = 'hello';
    const key = 3;
    const expected = 'khoor';

    expect(caesarCipher(input, key)).toBe(expected);
  });

  test('caesarCipher function works correctly with character wrapping from z to a', () => {
    const input = 'xyz';
    const key = 3;
    const expected = 'abc';

    expect(caesarCipher(input, key)).toBe(expected);
  });

  test('caesarCipher function works correctly with character wrapping from a to z', () => {
    const input = 'abc';
    const key = -3;
    const expected = 'xyz';

    expect(caesarCipher(input, key)).toBe(expected);
  });

  test('caesarCipher function preserves character cases', () => {
    const input = 'HELLO';
    const key = 3;
    const expected = 'KHOOR';

    expect(caesarCipher(input, key)).toBe(expected);
  });

  test('caesarCipher function should leave non-alphabets unchanged', () => {
    const input = 'Hello, World!';
    const key = 3;
    const expected = 'Khoor, Zruog!';

    expect(caesarCipher(input, key)).toBe(expected);
  });
});
