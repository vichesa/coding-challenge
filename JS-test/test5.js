// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  // let result = num.toString(2);
  // let arr = result.split('');
  // let count = 0;
  // for (i = 0; i < arr.length; i++) {
  //   console.log(arr);
  //   if (arr[i] == '1') {
  //     count += 1;
  //   }
  //   return count;
  // }
  var result = num.toString(2);
  var count = result.split(1);
  console.log(count);
  return count.length - 1;
}

console.log(result(number));
