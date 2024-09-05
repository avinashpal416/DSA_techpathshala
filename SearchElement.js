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
  




  




