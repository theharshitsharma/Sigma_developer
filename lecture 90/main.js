const express = require("express");
const app = express();
const port = 3008;
const blog=require("./routes/blog")
const fs=require("fs")
// app.use(express.static("public"))


app.use('/blog', blog)
//middlewares
app.use((req, res, next)=>{
    fs.writeFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    console.log('LOGGED')
    // res.send("middleware hacked bu 1")
    next()
  })
  app.use((req, res, next)=>{
    console.log('LOGGED2')
    next()
  })
  

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello World! about");
});
app.get("/contact", (req, res) => {
  res.send("Hello World! contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
