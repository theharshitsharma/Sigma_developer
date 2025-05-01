const express = require('express')
const app = express()
const Employee=require("./models/Employee")
const mongoose=  require('mongoose')
 mongoose.connect('mongodb://127.0.0.1:27017/company')
const port = 3005
app.set("view engine", "ejs");
const getrandom=(arr)=>{
    let rno=Math.floor(Math.random()*(arr.length-1))
    return arr[rno]
}





app.get('/', (req, res) => {
  res.render('index',{foo:'FOO'})
})
app.get('/generate', async (req, res) => {


    await Employee.deleteMany({})
    let randomnames=['rohan','mohan','sohan','lohan']
    let randomlang=['python','java','c++',"js"]
    let randomcities=['bilaspur','moradabad','mysore','ghaziabad']
    for(let index=0;index<10;index++){
        let e =await Employee.create({
            name:getrandom(randomnames),
            salary:Math.floor(Math.random()*220000),
            language:getrandom(randomlang),
            city:getrandom(randomcities),
            isManager:Math.random()>0.5?true:false
        })
        console.log(e)
    }
    res.json({success:true})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})