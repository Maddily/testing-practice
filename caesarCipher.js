function fixShifting(shiftingFactor, characterCode) {
  if (shiftingFactor >= 0) {
    characterCode = characterCode - 26;
  } else {
    characterCode = characterCode + 26;
  }

  return String.fromCharCode(characterCode);
}

export default function caesarCipher(string, key) {
  const shiftingFactor = key % 26;

  if (shiftingFactor === 0) return string;

  const characters = string.split('').map((character) => {
    // If the character isn't in the alphabet, leave it be.
    if (!character.match(/[a-z]|[A-Z]/)) {
      return character;
    }

    let characterCode = character.charCodeAt(0) + shiftingFactor;
    let shiftedCharacter = String.fromCharCode(characterCode);

    // If the character, after shifting, is no longer in the alphabet, fix shifting.
    if (!shiftedCharacter.match(/[a-z]|[A-Z]/)) {
      shiftedCharacter = fixShifting(shiftingFactor, characterCode);
    }

    return shiftedCharacter;
  });

  return characters.join('');
}
