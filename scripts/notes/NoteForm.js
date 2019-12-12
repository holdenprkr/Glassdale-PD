import { saveNote } from "./NoteDataProvider.js";

const eventHub = document.querySelector("#mainContainer")
const extraButtonTarget = document.querySelector(".extraButtonContainer")
const contentTarget = document.querySelector(".noteFormContainer")
const noteHTML = document.querySelector(".noteContainer")

const NoteFormComponent = () => {
    
   // Handle internal element click
   eventHub.addEventListener("click", clickEvent => {
     if (clickEvent.target.id === "saveNote") {
      clickEvent.preventDefault() 

        // Make a new object representation of a note
        const newNote = {
            text: document.querySelector('#note-text').value,
            date: new Date(Date.now()).toLocaleDateString('en-US'),
            suspect: document.querySelector('#note-suspect').value,
        }

        // Change API state and application state
        saveNote(newNote).then(() => document.getElementById("suspiciousNoteForm").reset())
        .then(() => {
          //check if notes are showing
          if (noteHTML.innerHTML !== "") {
          const message = new CustomEvent("noteCreated")
          eventHub.dispatchEvent(message)
        }
      })
    }
})

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
      const message = new CustomEvent("showNoteButtonClicked")
      eventHub.dispatchEvent(message)
    }
  })
  
  const render = () => {
        contentTarget.innerHTML = `
            <form id="suspiciousNoteForm">
            <div class="suspectNoteForm">
            <label for="note-text">Cold Case Note: </label>
            <input type="text" id="note-text" placeholder="Your note here...">
            <label for="note-suspect">Suspect: </label>
            <input type="text" id="note-suspect" placeholder="Suspect here...">
            <button id="saveNote">Save Note</button>
            </form>
            <br>`
        extraButtonTarget.innerHTML = `
            <div class="extraButtons">
            <button id="showNotes">Show Notes</button>
            <button id="hideNotes">Hide Notes</button>
            <button id="witnessStatements">Witness Statements</button>
            <button id="showAllCriminals">Show All Criminals</button>
            </div>`
    }

    render()
}

export default NoteFormComponent