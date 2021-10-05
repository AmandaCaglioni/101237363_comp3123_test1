//method resolvedPromise
const resolvedPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            let success={'message':'delayed success!'}
            resolve(success)
        },500)

    })
}
//method rejectedPromise
const rejectedPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let error={'error':'delayed exception!'}
            reject(error)
           
        },500)
        })
}
//calling resolvedPromise
resolvedPromise().then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})
//calling rejectedPromise
rejectedPromise().then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})
console.log('done by Amanda')
console.log('--------------------')