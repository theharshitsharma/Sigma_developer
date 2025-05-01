import fs from "fs/promises"
import fs from "fs"
// console.log(fs)
let files=await fs.readdir( "C:\\Users\\harsh\\OneDrive\\Desktop\\FSD\\mini-project\\lecture 91")
console.log(files)
let extensions=[]
for(const item of files){
    let ext=item.split(".")[item.split(".").length-1]
    console.log(ext)
    if(fsync.existsSync(ext)){
        fs.rename()
    }
    else{
        fs.mkdir(ext)
    }
    console.log(item)
}