let rowELEMENT = document.querySelector("#row");
let newNote = `
<div id = "note-container" class="card border-0 shadow rounded  mt-4 p-0" style="max-width: 18rem;">

    <div class="card-header card-header2 d-flex justify-content-between">
        <i class="fa fa-edit btn" style="color: white;"></i>
        <i onclick="remove(this)" class="fa fa-trash btn" style="color: white;" ></i>
    </div>

    <div class="card-body text-success">
        <h5 class="card-title">Success card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
    </div>

</div>
`

function addNewNote(){
    rowELEMENT.innerHTML += newNote;
}

function remove(element){
    element.parentElement.parentElement.remove()
    console.log(element)
    // document.getElementById(`${id}`).remove();
    // document.querySelector(id).remove();
}