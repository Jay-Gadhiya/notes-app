

showNotes();

let addBtn = document.getElementById('addBtn');    //add note button.

function button_1(){
    // document.querySelector(body).style.backgroundColor = "rgb(241, 241, 114)";
    document.body.style.backgroundColor = "rgb(241, 241, 114)";
    console.log("yes");
}
function button_2(){
    // document.querySelector(body).style.backgroundColor = "rgb(241, 241, 114)";
    document.body.style.backgroundColor = "rgb(114, 226, 241)";
    console.log("yes");
}
function button_3(){
    // document.querySelector(body).style.backgroundColor = "rgb(241, 241, 114)";
    document.body.style.backgroundColor = "rgb(152, 143, 240)";
    console.log("yes");
}
function button_4(){
    // document.querySelector(body).style.backgroundColor = "rgb(241, 241, 114)";
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    console.log("yes");
}

addBtn.addEventListener("click", function(e){

    let addTxt = document.getElementById("addTxt"); //select text area.
    let addTitle = document.getElementById("addTitle"); //select title area.
    let notes = localStorage.getItem("notes");     //key: notes in localStorage
    if (notes == null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let myobj = {
        title : addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));  
    addTxt.value = "";    
    addTitle.value = "";    
    showNotes();

})

function showNotes() {
    let notes = localStorage.getItem("notes"); 
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";            //string
    notesObj.forEach(function(element, index){
        html = html +
         `
        <div class="noteCard card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id = "${index}" onclick = "deletNote(this.id)" class="btn btn-primary">Delet Note</button>
        </div>
      </div> `;
    })

    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! use "Add Note" section above to add notes.`
    }


}


//delet note function

function deletNote(index){
    console.log('deleted');

    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}


let search = document.getElementById('searchTxt');

search.addEventListener("input", function(){
    
    let inputVal = search.value.toLowerCase();
    console.log("yes");
    let noteCards =document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }

    })
})