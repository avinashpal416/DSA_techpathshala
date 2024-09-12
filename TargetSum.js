/*Target Sum
1.create object variable
2. iterate through the array
3. calculate the difference between target and current number
4. check if the difference exists in the object
5. if yes, return the indices
6. if not, add the current number to the object and continue to the next number

*/




function targetSum(arr, target){
    let obj = {};
   
    for(let i=0; i<arr.length; i++){
        let currentNum = arr[i];
        let objCounter = target - currentNum;

        if(objCounter in obj){
            return [obj[objCounter], i]
        }
        obj[currentNum] = i;

    }
    return -1

}
let arr = [2, 7, 11, 15];
let target = 13;
let result = targetSum(arr, target);

console.log(result);






