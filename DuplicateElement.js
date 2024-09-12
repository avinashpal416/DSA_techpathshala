// Duplicate Elements in an Array
/*1.create a array variable
2. create a function to find duplicate elements
3. iterate over the array and compare each element with the rest of the array
4. if an element is found to be duplicated, add it to the duplicateElem array and set flag to true
5. if no duplicate elements are found, return "No duplicate elements found"
*/



function duplicateElements(arr) {
  let duplicateElem = [];
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (!duplicateElem.includes(arr[i])) {
          duplicateElem += arr[i];
          flag = true;
          break;
        }
      }
    }
    if ((duplicateElem.length == 0)) {
      return "No duplicate elements found";
    }
  }
  return duplicateElem.split("").join();
}

let arr = [1, 4, 2, 2, 3, 5, 6, 6, 6, 5, 9];
let result = duplicateElements(arr);
console.log(result);
