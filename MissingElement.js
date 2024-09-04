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