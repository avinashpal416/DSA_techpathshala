// String concat

function stringConcat(str1, str2){
    let store = '';
    
    for(let i=0; i<str1.length;i++){
        store +=str1[i]
      
    }
    
    for(let j=0; j<str2.length; j++){
        store += str2[j];
        
    }
    return store;
    

}
let str1= "animal";
let str2 = "world";
let result = stringConcat(str1, str2);
console.log(result);