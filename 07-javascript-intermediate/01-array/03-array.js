const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr, num) {
    //   The concat() method concatenates (joins) two or more arrays
      let newArr = [].concat(...arr);
      let i = newArr.indexOf(num);
    
      if (i > 0 ) {
          return i;
      } else {
          return null;
      }
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  