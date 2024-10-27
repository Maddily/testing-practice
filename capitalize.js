export default function capitalize(string) {
  if (!string) return '';

  const stringArray = string.split('')
  stringArray[0] = stringArray[0].toUpperCase();

  return stringArray.join('');
}
