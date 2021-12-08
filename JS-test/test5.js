// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  let result = num.toString(2);
  let arr = result.split('');
  let count = 0;
  let check = '1';
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === check) {
      count += 1;
    }
  }
  return count;
}

console.log(result(number));
