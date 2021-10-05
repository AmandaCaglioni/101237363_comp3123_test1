const mixedArray=['PIZZA',10,true,25,false,'Wings']
const lowerCaseWords=(value) =>{
    x=value;
    return new Promise((resolve,reject)=>{
    if(isNaN(x)){
        resolve(x.toLowerCase())
    }
    else if(mixedArray==undefined){
        reject('failed')
    }
   
})
.then((message) =>{
    console.log(message)
}).catch((message) =>{
    console.log(message)
})
}
mixedArray.filter(lowerCaseWords)
console.log('done by Amanda')
console.log('-------------------')