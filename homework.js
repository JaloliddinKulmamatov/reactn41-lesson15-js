//1

// function deleteMany(map, ...keys) {
//   for (let key of keys) {
//     map.delete(key);
//   }
// }

// let obj = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
//   ['d', 4]
// ]);

// deleteMany(obj, 'a', 'c');

// console.log(obj);


//2

// let obj = new Map([['a', 2], ['b', 5], ['c', 3]])

// let value = obj.values();
// function mapSum(obj) {
//     let sum = 0;

// for (el of value) {
//     sum += el
// }
// return sum
// }

// console.log(mapSum(obj));

//4

// let obj =  new Map([[{id: 1}, 'John'], [{id: 2}, 'Jane'], [{id: 3}, 'Alice']]);

// console.log(obj.size);

//5

// let set1 = [1, 2, 3];
// let set2 = [2, 3, 4];

// let set = new Set([...set1, ...set2]);

// console.log("Set:", set);

//6

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);

// let newSet = new Set([...set1].filter(el => set2.has(el)));

// console.log(newSet);


//7

// let set1 = new Set([2,3]);
// let set2 = new Set([1,2,3,4]);

// let checkSetSubset = function() {
//     for (  i1 of set1) {
// }

//     for ( i2 of set2) {
//     }

//     if (set2.has(i1)) {
//        return console.log("true");
//     }else {
//        return console.log("fasle");
//     }
// }
 
// checkSetSubset();


//9

// const mergeArr = class {
//     constructor(arr1,arr2) {
//     this.megArr = [...arr1,...arr2];
//     }
// }

// let arr1 = [1, 5, 8];
// let arr2 = [7, 9, 10];

// let res = new mergeArr(arr1,arr2);

// console.log(res.megArr);

//10

