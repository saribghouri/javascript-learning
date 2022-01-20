// promise:"best video on promises"
// resolve
// reject 
// pending
function func1(){
    return new promise(function(resolve,reject){
        setTimeout(()=>{
            const error = true;
            if( !error){
                console.log('function: your promise has been rosolved')
                resolve();

            }
            else{
                console.log('your promise has been resolved')
                reject('sorry not fulfilled');
            }
        },2000);
    })
}
func1().then(function(){
console.log("Harry:Thanks for resolving")
}).catch(function(error){
    console.log("Harry: vary bad bro" + error)
})