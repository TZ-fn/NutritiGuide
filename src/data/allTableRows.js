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
  {
    ingredientName: 'VITA_RAE',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'VITC',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'THIA',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'RIBF',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'NIA',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'VITB6A',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'FOLDFE',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'FOLFD',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'FOLAC',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'VITB12',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'VITD',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'VITK1',
    customLabel: 'Vitamin K',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'CA',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'MG',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'K',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'FE',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'P',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
  {
    ingredientName: 'ZN',
    customLabel: '',
    isBold: false,
    isIndented: false,
  },
];

export default usedTableRows;
