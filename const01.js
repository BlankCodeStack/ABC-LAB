const arr = [1, 2, 3, 5, 6];

const exObj = {};
arr.forEach((item, idx) => {
  const name =`name${item}`;

  exObj [name] = 2;
  console.log(idx, "번째", exObj)
});
console.log(exObj);


const arr1 = {
  name1: 1,
  name2: 2,
  name3: 3,
  name4: 4,
  name5: 5,
};

const result = Object.entries(obj).reduce((acc, [key, value])=>{
  console.log(acc, key, value);
  acc[key] = value;
  /**
  *acc ["name1"] = 1
  *acc ["name2"] = 2
  *acc ["name3"] = 3
  *acc ["name4"] = 4
  *acc ["name5"] = 5
   */
  return acc;
},{});
console.log(result);