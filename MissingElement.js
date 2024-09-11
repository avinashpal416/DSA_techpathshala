/*Find Missing Element of one element
1.Calculate the expected sum of elements by using the formula (x*(x+1))/2
2.Initialize three variable - for original length of array, expectedSum, actualSum
3.Now calculate the actual sum by creating a loop over an array and storing the actual sum in a variable
4.return expectedSum - actualSum
5.If it finds the missing element then it will return the output or else it will console with the message of "No missing elements found"
*/



// Find missing element in an array
function missingElem(arr){
    let n = arr.length+1;
    let expectedSum = (n*(n+1))/2;
    let actualSum = 0;
    
    for(let i=0; i<arr.length; i++){
      actualSum += arr[i];
      
    }
    
    return expectedSum - actualSum;
  }
  
  let arr = [1, 2, 3, 4, 6]; 
  let result = missingElem(arr);
  console.log(result);