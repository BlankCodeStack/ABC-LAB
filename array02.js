const arr =[];
 for(let i = 1; i <= 100; i++) {
  arr.push(i);
 }
 const filterArr = arr.filter(number => number%2 ===0);
 const findIndexArr = filterArr.findIndex(a => a ==26);
filterArr.push(200);

 console.log(findIndexArr);
 console.log(filterArr);