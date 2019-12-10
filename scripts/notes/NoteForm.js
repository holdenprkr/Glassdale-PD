import { saveNote } from "./NoteDataProvider.js"
import NoteListComponent from "./NoteList.js"

const eventHub = document.querySelector("#mainContainer")
const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
    
   // Handle internal element click
   eventHub.addEventListener("click", clickEvent => {
     if (clickEvent.target.id === "saveNote") {
      // clickEvent.preventDefault() <-- only if using form tag (refresh)

        // Make a new object representation of a note
        const newNote = {
            text: document.querySelector('#note-text').value,
            date: new Date(Date.now()).toLocaleDateString('en-US'),
            suspect: document.querySelector('#note-suspect').value,
        }

        // Change API state and application state
        saveNote(newNote).then(() => NoteListComponent())
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
            <div class="suspectNoteForm">
            <label for="note-text">Notes: </label>
            <input type="text" id="note-text" placeholder="Your note here...">
            <label for="note-suspect">Suspect: </label>
            <input type="text" id="note-suspect" placeholder="Suspect here...">
            <button id="saveNote">Save Note</button>
            <button id="showNotes">Show Notes</button>
            </div>
        `
    }

    render()
}

export default NoteFormComponent