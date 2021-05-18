// encode the user input, so it matches the API requirements
export default function encodeInput(input) {
  let encodedInput = '';
  encodedInput = input
    .trim()
    .replace(/[,]?[ ]+?\n+/g, '%20and%20')
    .replace(/ +/g, '%20');
  return encodedInput;
}
