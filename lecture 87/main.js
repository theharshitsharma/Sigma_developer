const { error } = require("console")
const fs=require("fs")
console.log(fs)
console.log("starting")
// fs.writeFileSync("harshit.txt","i am good")
fs.writeFile("harshit2.txt","harhsit is good boy",()=>{
    console.log("done")
    fs.readFile("harshit2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("harshit.txt","jai shree ram",(e,d)=>{
    console.log(d)
})
console.log("ending")