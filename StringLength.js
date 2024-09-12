// String Length 

function stringLength(str){
    let length = 0;
    let i = 0;
    while(str[i]!==undefined){
     length++;
     i++;
    }
    return length;
 
 }
 let str = 'Animal';
 let result = stringLength(str);
 console.log(result);



//  function stringLength(str, index = 0){
//     if(str[index]==undefined){
//         return index
        
//     }
//     return stringLength(str, index+1);
// }
// let str = 'Animal';
// let result = stringLength(str);
// console.log(result);
