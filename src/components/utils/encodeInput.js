export default function encodeInput(input) {
  let encodedInput = '';
  encodedInput = input
    .trim()
    .replace(/,[ ]?/g, '%20and%20')
    .replace(/\n+/g, '%20and%20')
    .replace(/ +/g, '%20')
    .replace(/%20and%20%20and%20/g, '%20and%20');
  return encodedInput;
}
