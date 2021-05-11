const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

const MAIN_API = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=`;

export default async function fetchData(inputData = '1%20large%20apple') {
  const res = await fetch(`${MAIN_API}${inputData}`);
  const data = await res.json();
  return data;
}
