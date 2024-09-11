/*Search an element
1.Know the element that has to be searched
2.Create a loop 
3.Iterate over the the array till the last element, initially it will be at first index of an array
4.Create the blank variable to store the searched element and initially it would be null
5.apply the condition - if the initial element matches the required element then push that element in the blank variable
6.print the blank variable or else print 'Element is not present in the array'
*/



// Search of element
function searchElem(arr) {
  let requiredElem = 5;
  let initialElem = null;
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === requiredElem) {
      initialElem = arr[i];
      flag = true;
      break;
    }
  }

  if (!flag) {
    return "Element is not found";
  }

  return initialElem;
}

let arr = [2, 45, 65, 7, 5, 4, 6, 7];
let result = searchElem(arr);
console.log(result);
