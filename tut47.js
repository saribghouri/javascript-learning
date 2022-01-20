console.log('this is tut 47');

let regex= /harryJFGTJ/;
regex=/^harrdc/; //^ means expression will match if string starts with
regex=/ry$/;
let str = "harry is harry";

let result = regex.exec(str);
console.log("the result form exec is", result);

if(regex.test(str)){
    console.log(`the string ${str} ,matches the expression${regex.source}`);
}
else{
    console.log(`the string ${str} ,does not match the expression${regex.source}`)
}