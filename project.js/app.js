console.log("first project");
showNotes()
//if user adds a notes  add it a local storage//

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let notesObj = [];

  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addtitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
  }
  if (addTxt.value != "") {  notesObj.push(myObj);
  }
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";

  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  console.log("notes", notes)
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  console.log(notesObj)
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title"> ${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
  </div> `;
  });

  let notesElm = document.getElementById("notes");
  console.log(notesObj.length, 'notesObj.length')
  if (notesObj.length > 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `nothing to show! use "add a note" section above to add notes.`;
  }
}
//function to delete a note
function deleteNote(index) {
  console.log(" i am deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);

  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
let inputVal = search.value
console.log('Input event fired!',inputVal);
let noteCards = document.getElementsByClassName('noteCard');
Array.from(noteCards).forEach(function(element){
 
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal)){
      element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
    // console.log(cardTxt)
     })
})
