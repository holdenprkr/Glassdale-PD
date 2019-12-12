import { useNotes, getNotes, deleteNote } from "./NoteDataProvider.js";
import { noteComponent } from "./Note.js";

const eventHub = document.querySelector("#mainContainer")
const noteHTML = document.querySelector(".noteContainer")

const NoteListComponent = () => {

  eventHub.addEventListener("showNoteButtonClicked", event => {
    getNotes().then(
      () => {
        render(useNotes())
      }
    )
  })

  eventHub.addEventListener("click", e => {
    if (e.target.id === "hideNotes") {
      noteHTML.innerHTML = ""
    }
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--")

      /*
          Invoke the function that performs the delete operation.

          Once the operation is complete you should THEN invoke
          useNotes() and render the note list again.
      */
      deleteNote(id).then(() => render(useNotes()))
    }
  })

   const render = noteCollection => {
    noteHTML.innerHTML = `
      ${noteCollection.map(
      (note) => {
        return noteComponent(note)
      }
    ).join("")}`
  }
}

export default NoteListComponent