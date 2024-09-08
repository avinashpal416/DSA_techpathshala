function swapNumbers(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
let arr = [12, 4, 3, 9, 5, 6, 32, 13, 7];
let result = swapNumbers(arr);
console.log(result);
