// Max Appearing Element in an Array

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