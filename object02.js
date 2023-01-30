// 객체를 선언 (number, string, boolean, null, undefined, object, array, function)
// 함수 : 객체 value의 데이터 타입이 number인 [key, value]만 뽑아서 새로운 객체를 return
// reduce, entries

const exObj = {
  age1 : 10,
  age2 : 20,
  name : "홍길동",
  isFemale : false,
  inNull : null,
  isUndefined: undefined,
  user : {
    name: "희환",
  },
  arr: ["a", "b", "c"],
  getAge: () => {
    console.log("getAge");
  },
  getName:() => {
    console.log("getName");
  },
};

const getOnlyNumberObj1 = (obj) => {
  const objEntries =Object.entries(obj);

  console.log("Entries",objEntries);

  const result = objEntries.reduce((acc, [key, value]) => {
    if(typeof value === "number"){
      //key : age1, value:10
      acc[key] = value;
    }
    acc.age1= value;
    return acc;
  }, {})
  return result;
};


// 리펙토링 (Refactoring)
const getOnlyNumberObj2 = (obj) =>{
  Object.entries(obj).reduce((acc, [key, value])=>{
    if (typeof value === "number") acc[key] = value;
    return acc;
  },{});
}


// acc["age1"] = 10; => 문자열 변수나, 순수 문자열을 통해 객체에 접근할 때 사용.
// acc[key]
// acc.age1 = 10 => 미리 만들어진 객체에 대해서만 사용가능


  /*
{
  age1 : 10,
  age2 : 20
}

  const resultObj = {};
  objEntries.forEach((item)=>{});
  */


getOnlyNumberObj1(exObj);
getOnlyNumberObj2(exObj);