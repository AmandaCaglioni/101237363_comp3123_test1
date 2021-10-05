//including fs module for file reading,writing
const fs = require("fs");

//making Logs directory
fs.mkdir('Logs',(err)=>{
    if(err){
        console.log('directory already exist'+"\n"+"run remove.js first"+"\n"+err)
    }
    else{

//naming the list of files
const listOfFiles = [{fileName:"./Logs/logo0.txt",data:"dummy data 1!"},{fileName:"./Logs/logo1.txt",data:"dummy data 2!"},{fileName:"./Logs/log02.txt",data:"dummy data 3!"},{fileName:"./Logs/logo3.txt",data:"dummy data 4!"},{fileName:"./Logs/logo4.txt",data:"dummy data 5!"},
                     {fileName:"./Logs/logo5.txt",data:"dummy data 6!"},{fileName:"./Logs/logo6.txt",data:"dummy data 7!"},{fileName:"./Logs/logo7.txt",data:"dummy data 8!"},
                     {fileName:"./Logs/logo8.txt",data:"dummy data 9!"},{fileName:"./Logs/logo9.txt",data:"dummy data 10!"}];

//adding list of files to our write method                     
listOfFiles.reduce(function(curFile, nextFile){
        return writeData(nextFile).then();
}, writeData);


//method involving writing and showing files
function writeData(params){
  return new Promise((resolve,reject)=>{
    fs.writeFile(params.fileName,params.data,'utf8',(err)=>{
       if(err)
          reject(err);
       else{
         //spliting file names
       let ext=params.fileName.split('/').pop();
        console.log(ext)
        resolve();
       }
      });
 });
}
    }
 });
 console.log('done by Amanda')
console.log('--------------------')