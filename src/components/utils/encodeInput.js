// encode the user input, so it matches the API requirements
export default function encodeInput(input) {
  let encodedInput = '';
  encodedInput = input
    .trim()
    // cover line endings using combinations of commas and spaces
    .replace(/[,]*[ ]*\n+/g, '%20and%20')
    .replace(/ +/g, '%20');
  return encodedInput;
}
