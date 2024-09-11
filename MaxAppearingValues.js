// Max Appearing Element in an Array
/*1.check if the array is empty or has singke element return with the message 
2. create an empty object to keep track of the elements and their counts
3. initialize maxCount and maxElement to 0 and an empty array respectively
4. iterate through the array and for each element check if it is already in the object, if not add it with count 1, else increment the count
5. if the count is greater than maxCount update maxCount and maxElement
6. if the count is equal to maxCount add the element to maxElement array
7. return the maxElement(s) or a message if there are multiple elements with the same maximum count
*/







function maxAppearingElem(arr){
    if(arr.length === 0){
        return 'Array is empty';
    }else if(arr.length === 1){
        return 'Single element is present in the array';
    }
    let obj = {};
    let maxCount = 0;
    let maxElement = [];
    for(let i=0; i<arr.length;i++){
        let x = arr[i];
        obj[x] = (obj[x] || 0) + 1;

        if(obj[x] > maxCount){
            maxCount = obj[x];
            maxElement = [x];

        }else if(obj[x] === maxCount){
            maxElement += x;
        }


    }
    if(maxElement.length > 1){
        return "Multiple elements  have same repetitions:"+ ' '  + maxElement.split('').join(','); 
    }else{
        return maxElement[0];
    }
    // return maxElement;
}

let arr = [1,2,3,5,4,6,8,8,8,7,7,7];
let result = maxAppearingElem(arr);
console.log(result);