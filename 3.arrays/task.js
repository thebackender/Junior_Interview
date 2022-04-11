function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  result = false;
  if(arr1.length == arr2.length && arr1.every((v, i) => v === arr2[i])) 
      result = true;

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(item => item >= 0 && item%3 == 0).map(element => {
    return element*10
  });

  return resultArr; // array
}
