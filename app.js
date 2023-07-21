let notes = document.querySelector(".notes");
let addButton = document.querySelector(".add-note");
let noteInput = document.querySelector(".note");

let notesList = [];

if (localStorage.getItem("note")) {
  notesList = JSON.parse(localStorage.getItem("note"));
  displayNotes();
}

addButton.addEventListener("click", function () {
  if (!noteInput.value) return;
  let newNote = {
    note: noteInput.value,
    date: new Date().toLocaleString(), // Get the current date and time
  };

  notesList.push(newNote);
  displayNotes();
  noteInput.value = "";

  // Save notesList to local storage after adding a new note
  localStorage.setItem("note", JSON.stringify(notesList));
});

function displayNotes() {
  let displayNote = "";
  notesList.forEach(function (item, index) {
    displayNote += `
          <li id='index_${index}'>
            ${item.note}
            <span class="note-date">${item.date}</span>
            <button class="delete-note" onclick="deleteNote(${index})">Delete</button> 
          </li>
        `;
  });
  notes.innerHTML = displayNote;
  localStorage.setItem("note", JSON.stringify(notesList));
}

function deleteNote(index) {
  notesList.splice(index, 1);
  displayNotes();

  // Update notesList in local storage after deletion
  localStorage.setItem("note", JSON.stringify(notesList));
}
