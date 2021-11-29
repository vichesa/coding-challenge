// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let first = [];
  let second = [];
  let val1 = null;
  let val2 = null;
  let biggest = arr1[0];
  let smallest = arr1[0];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > biggest) {
      biggest = arr1[i];
    }

    if (arr1[i] < smallest) {
      smallest = arr1[i];
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] > biggest) {
      first.push(true);
    } else {
      first.push(false);
    }

    if (arr2[j] < smallest) {
      second.push(true);
    } else {
      second.push(false);
    }
  }

  for (k = 0; k < first.length; k++) {
    if (first[k] === false) {
      val1 = false;
    }

    if (second[k] === true) {
      val2 = true;
    }
  }
  // console.log(val1);
  // console.log('small', val2);
  const res = [val1, val2];
  return res;
}

console.log(result(arr1, arr2));
