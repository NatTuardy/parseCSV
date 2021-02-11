import shotNameOfState from './shortNameOfState';

const isValidEmpty = a => {
  if (a.length === 0) {
    throw new SyntaxError('Missing critical data!');
  }
};

const isValidName = el => {
  isValidEmpty(el);
};

const isValidPhone = (el, index, rowArr) => {
  isValidEmpty(el);
  if (el.length > 12 || el.length < 10) {
    return true;
  }
  if (el.length === 12 && (el[0] !== '+' || el[1] !== '1')) {
    return true;
  }
  if (el.length === 11 && (el[0] === '+' && el[1] === '1')) {
    return true;
  }

  if (el.length === 11 && el[0] === '1') {
    rowArr[index] = '+' + el;
  }
  if (el.length === 10) {
    rowArr[index] = '+1' + el;
  }
};

const isValidEmail = (el, index, rowArr, newAr) => {
  isValidEmpty(el);
  if(!/^[^@]+@[^@.]+\.[^@]+$/.test(el)){
    return true;
  }
};

const isValidAge = el => {
  if (el % 1 !== 0) {
    return true;
  }
  if (+el < 21) {
    return true;
  }
};

const isValidExperience = (el, index, rowArr) => {
  if (+el > rowArr[index - 1] - 21 || +el < 0) {
    return true;
  }
};

const isValidIncome = (el, index, rowArr) => {
  if (el % 1 !== 0) {
    if (
      el.slice(el.indexOf('.') + 1).length !== 2 &&
      !Number.isNaN(Number(el))
    ) {
      rowArr[index] = el.slice(0, el.indexOf('.') + 3);
    }
  }
  if (+el > 1000000 || +el < 0) {
    return true;
  }
  if (el.slice(el.indexOf('.') + 1).length === 1) {
    rowArr[index] = el + '.00';
  }
  if (Number.isNaN(Number(el))) {
    return true;
  }
};

const isValidHasChildren = (el, index, rowArr) => {
  el = el.trim();
  const elArr = el.toUpperCase();
  rowArr[index] = elArr;
  if (
    el.toLowerCase() !== 'true' &&
    el.toLowerCase() !== 'false' &&
    el !== ''
  ) {
    return true;
  }
};

const isValidLicenseStates = (el, index, rowArr) => {
  const elArr = el.split('|');
  let flag = false;
  let flagContainer = [];
  const entries = Object.entries(shotNameOfState);

  elArr.map((item, idx, arr) => {
    arr[idx] = arr[idx].trim();
    for (const entry of entries) {
      const key = entry[0];
      const value = entry[1];

      if (item.trim() === value || item.trim() === key) {
        flag = false;
        flagContainer.push(flag);
        arr[idx] = value;
        rowArr[index] = elArr.join('|');
      } else {
        flag = true;
      }
    }
  });

  if (flagContainer.length !== elArr.length) {
    return true;
  }
};

const isValidExpiration = el => {
  const CurrentDate = new Date();
  const ourDate = new Date(el);
  if (ourDate < CurrentDate) {
    return true;
  }
 
  if (!/\d{,4}-\d{,2}-\d{,2}/.test(el) && !/\d{2}\/\d{2}\/\d{4}/.test(el)) {
    return true;
  }
};

const isValidLicenseNumber = (el, index, rowArr) => {
  el = el.trim();
  if (el.length !== 6 || /\W|_/.test(el)) {
    return true;
  }
};

const validCells = [
  isValidName,
  isValidPhone,
  isValidEmail,
  isValidAge,
  isValidExperience,
  isValidIncome,
  isValidHasChildren,
  isValidLicenseStates,
  isValidExpiration,
  isValidLicenseNumber,
];

export default validCells;
