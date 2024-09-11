/*Swaping numbers of pair elements
1.iterate through the Array
2.create a temp variable
3. swap the current element with the next element
4. return the modified array
*/




// Swap numbers of pair elements 
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
