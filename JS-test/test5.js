// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  var result = num.toString(2);
  var count = result.split(1);
  return count.length - 1;
}

console.log(result(number));
