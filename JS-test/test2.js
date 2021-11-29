// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2.
// The conditions are :
// 1. odd number at beginning
// 2. even number at the end of array
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  begin = [];
  end = [];

  arr3 = arr2.filter(function (val) {
    return arr1.indexOf(val) == -1;
  });

  for (let i = 0; i < arr3.length; i++)
    if (arr3[i] % 2 !== 0) {
      begin.push(arr3[i]);
    } else if (arr3[i] % 2 == 0) {
      end.push(arr3[i]);
    }
  return begin.concat(arr1, end);
}

console.log(result(arr1, arr2));
