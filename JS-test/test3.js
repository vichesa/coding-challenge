// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let biggest = Math.max(...arr1);
  let smallest = Math.min(...arr1);
  let val1 = [];
  let val2 = [];
  let first;
  let second;

  //check the value of each element
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > biggest) {
      val1.push(true);
    } else {
      val1.push(false);
    }
    if (arr2[i] < smallest) {
      val2.push(true);
    } else {
      val2.push(false);
    }
  }

  //result
  for (let j = 0; j < val1.length; j++) {
    if (val1[j] === false) {
      first = false;
    }
  }
  for (let k = 0; k < val2.length; k++) {
    if (val2[k] === true) {
      second = true;
    }
  }
  let res = [first, second];
  return res;
}

console.log(result(arr1, arr2));
