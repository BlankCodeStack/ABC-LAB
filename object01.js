// 객체 선언 (value 의 데이터 타입 string / number/ boolean /null / undefined / object / array / function ) 
//함수 -객체의 value의 데이터 타입이  number인 [key, value]만 뽑아서 새로운 객체 return (reduce)
const myObj = {
  str : 'hello', //string
  num : 30, //number
  num1 : 10,
  bool : true, // boolean
  nul : null, //null
  undeifn : undefined, //nudefined
  arr : [1,2,3,4], //array
  object1 : {key1 : 'value'},
  fun : function () {
    return '이름 $(this.str), 나이 $(this.num)';
  }
}

function findNunber(myObj){
  const vArr = Object.keys(myObj);
  const sArr=[];
  for(i=0;i<vArr.length;i++){
  if (typeof(myObj[vArr[i]]) ==='number'){
  sArr.push([vArr[i],myObj[vArr[i]]]);
    }
  }
  return sArr;
};

console.log(findNunber(myObj));

console.log(typeof myObj.str);
console.log(typeof myObj.num);
console.log(typeof myObj.bool);
console.log(typeof myObj.nul === null);
console.log(typeof myObj.undeifn);
console.log(typeof myObj.arr);
console.log(typeof myObj.object1);
console.log(typeof myObj.fun);
console.log( myObj.nul === null);





// const myStr = new String ('kim');
// const myNum = new Nymber (30);
// const myBool = new Boolean (true);
// const myNull = new Null (null);
// const myNdf = new nudefined();
// const myObject = new Object({key1 : 'value'})
// const myArr = new Array ([0,1,2]);
// const myFun = new Function() {}; 