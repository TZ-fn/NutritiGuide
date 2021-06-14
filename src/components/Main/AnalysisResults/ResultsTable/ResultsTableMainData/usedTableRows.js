// An object with all the properties used in the table as well as their configuration
//
// Initially I was thinking about making lists containing all the options e.g. isBold = [matching ingredients],
// isIndented = [matching ingredients] etc., but making each ingredient as an object makes the scaling and making changes easier

const usedTableRows = [
  {
    ingredientName: 'FAT',
    customLabel: 'Total Fat',
    isBold: true,
    isIndented: false,
  },
  {
    ingredientName: 'FASAT',
    customLabel: 'Saturated Fat',
    isBold: false,
    isIndented: true,
  },
  {
    ingredientName: 'FAMS',
    customLabel: 'Monounsaturated Fat',
    isBold: false,
    isIndented: true,
  },
  {
    ingredientName: 'FAPU',
    customLabel: 'Polyunsaturated Fat',
    isBold: false,
    isIndented: true,
  },
  {
    ingredientName: 'FATRN',
    customLabel: 'Trans Fat',
    isBold: false,
    isIndented: true,
  },
  {
    ingredientName: 'CHOLE',
    customLabel: '',
    isBold: true,
    isIndented: false,
  },
  {
    ingredientName: 'NA',
    isBold: true,
    isIndented: false,
  },
  {
    ingredientName: 'CHOCDF',
    customLabel: 'Total Carbohydrates',
    isBold: true,
    isIndented: false,
  },
  {
    ingredientName: 'FIBTG',
    customLabel: 'Dietary Fiber',
    isBold: false,
    isIndented: true,
  },
  {
    ingredientName: 'SUGAR',
    customLabel: 'Total Sugars',
    isBold: false,
    isIndented: true,
  },
  {
    ingredientName: 'PROCNT',
    customLabel: '',
    isBold: true,
    isIndented: false,
  },
];

export default usedTableRows;
