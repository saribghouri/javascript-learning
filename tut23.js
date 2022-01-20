// console.log("welcome to tutorial number 23");
// let x = 3;
// let y = 7;
// let z;
// z = x+y;
// z = x-y;
// z = x*y;
// z = x/y;
// z = Math;
// z =Math.PI;
// z =Math.E;
// z =Math.round(5.4);
// z =Math.ceil(5.3);
// z =Math.floor(-5.3);
// z =Math.abs(5);
// z =Math.sqrt(64);
// z =Math.pow(2,3);
// z =Math.min(2,545,4,654,1,7,54,-1.4);
// // z=Math.max(55,1,2,5,8,475875,946469452,46,64,4461145545.4555664,446,4646)
// console.log(z)
// console.log("welcome to tutorial 24")
// let today =new Date();
// console.log(typeof today);

// let otherDate = new Date('13-2-2003 05:54:08');

// otherDate = new  Date('June 13 1976');
// otherDate = new  Date('June/13/1976');
// console.log(otherDate)
// let a;
// a = otherDate.getDay();
// a = otherDate.getDate();
// a = otherDate.getminutes();
// a = otherDate.getSecond();
// a = otherDate.gethours();
// a = otherDate.getTime();
// a = otherDate.getMilliseconds();
// a = otherDate.getMonth();
// console(a);
// a = otherDate.setDate(23);
// otherDate.setDate(23)


console.log("tihs is tut 25");

   let divElem = document.createElement('div');

let text=document.createTextNode('This is my element. click to edit it')
     divElem.appendChild(text)

// give element id style and class

    divElem.setAttribute('id','elem');
   divElem.setAttribute('id','elem');

       divElem.setAttribute('style','border:2px solid black; width: 154px, margin: 34px; padding:23px;');
let container = document.querySelector('.container');

      let first = document.getElementById('myfirst');

//insert the element before element  with id first
    container.insertBefore(divElem, first);
  console.log(divElem ,container ,first);
