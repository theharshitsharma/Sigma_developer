console.log("harshit is a hacker")
console.log("sharma is a hacker")



setTimeout(()=>{
    console.log("i am inside timeout")
},0)
setTimeout(()=>{
    console.log("i am inside timeout 2")
},2)

console.log("the end")


const callback=(arg)=>{
    console.log(arg)
}

const loadScript=(src,callback)=>{
    let sc=document.createElement("script")
    sc.src=src;
    
}

