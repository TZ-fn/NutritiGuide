const formatNumber = (number) => (number < 1 ? number.toFixed(2) : Math.round(number));

export default formatNumber;
