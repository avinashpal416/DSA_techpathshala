// merging two arrays
/*1. create a variable to store the merged Array
2. use the spread operator (...) to merge the two arrays into one
3. return the mergedArray
*/


let arr1 = [1,4,5,8,7,9,7];
let arr2 = [7,9,5,8,4,6,1];

function MergeTwoArrays(arr1, arr2){
    let mergedArray = [...arr1, ...arr2]
    return mergedArray;
}

let mergedArray = MergeTwoArrays(arr1, arr2);
console.log(mergedArray);



// merging two arrays without duplicate elements and sorted elements

// function mergeTwoArrays(arr1, arr2){
//     let mergedArray = [...new Set([...arr1, ...arr2])];
//     return mergedArray.sort();
// }
// let arr1 = [1,4,5,8,7,9,7];
// let arr2 = [7,9,5,8,4,6,1];
// let mergedArray = mergeTwoArrays(arr1, arr2);
// console.log(mergedArray);

