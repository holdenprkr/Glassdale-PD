import { useNotes, getNotes, deleteNote } from "./NoteDataProvider.js";
import { noteComponent } from "./Note.js";
const eventHub = document.querySelector("#mainContainer")
const noteHTML = document.querySelector(".noteContainer")
const editNoteHTML = document.querySelector(".editNoteContainer")

const NoteListComponent = () => {

  const rerenderNotes = () => {
    getNotes().then(
      () => {
        render(useNotes())
      }
    )
  }
  eventHub.addEventListener("noteCreated", event => {
    rerenderNotes()
  })

  eventHub.addEventListener("showNoteButtonClicked", event => {
    rerenderNotes()
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

  eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("editNote--")) {
      const [prefix, id] = e.target.id.split("--")
      const notes = useNotes()
      let currentNote = {}
      for (let note of notes) {
        if (note.id === parseInt(id, 10)) {
          //  currenNote = note
          const id = note.id
          const text = note.text
          const suspect = note.suspect

          const noteEditId = document.getElementById("note-id")
          noteEditId.value = id
          const noteEditText = document.getElementById("note-text")
          noteEditText.value = text
          const noteEditSuspect = document.getElementById("note-suspect")
          noteEditSuspect.value = suspect
        }
      }     
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