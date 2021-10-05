//including fs module for file removing
const fs=require('fs');

//reading files from Logs directory
fs.readdir('./Logs',(err,files)=>{
    if(err){
        console.log('run add.js first'+"\n"+err)
    }
    else{
        //deleting all files from Logs one by one
        for(let file of files){
            console.log('delete files...'+file)
            fs.unlink('./Logs/'+file,(err)=>{
                if(err){
                    console.log(err)
                }
            })

        }
        //removing remove directory
        fs.rmdir('./Logs',(err)=>{
            if(err){
                console.log(err)
            }
        })
    }
})
console.log('done by Amanda')
console.log('--------------------')
