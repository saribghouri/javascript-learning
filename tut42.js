console.log('this is my tutorail 42')
let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

function getDate(){
    console.log("Started getData")
url = "https://api.gitub.com/users";
fetch(url).then((response)=>{ 
        console.log("inside first then")   

        return response.json();
    }).then((data)=>{
        console.log("inside second then")    
        console.log(data);
    })
    function postData(){
        url = "https://saribghouri.github.io/cloning-facebook-design/"
     data = '{" name": "test", "salary":"123","age":"23"}'
     params= {
         method: "post",
         headers:{

        'content-Type': 'application/json'
    
         },
         body:data
     }
     fetch(url,params).then((response)=>{
         return response.json();
       
     }).then((data)
     =>{
         console.log(data);
     })
    }
}
console.log("Before running get data")
getDate()
console.log("After running get data")










