// arr [ 1 ~ 100 ] 선언
const arr =[];
 for(let i = 1; i <= 100; i++) {
  arr.push(i);
 }
 // 확인
 console.log(arr);

// 짝수만 걸러서 출력 하기 
 const filterArr = arr.filter(number => number%2 ===0);
 //확인
 console.log(filterArr);

 //인덱스 값 26 찾기
const findIndexArr = arr.findIndex(a => a == 26)
 //확인
 console.log(findIndexArr);

 //arr 배열 마지막에 200 추가 
 arr.push(200);
 //확인
 console.log(arr);