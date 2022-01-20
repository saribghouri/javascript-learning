console.log("this is tutorial 43")
async function sarib(){
    console.log("inside sarib function")
    const response = await fetch("https://api.github.com/users");
    console.log("before response");
    const users = await response.json();
console.log('user resolved')
return users; 
// return "sarib";
}
console.log("before calling sarib");
let a = sarib();
console.log("After calling sarib")
console.log(a)
a.then()
console.log("last line of this js file")