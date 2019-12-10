import { useNotes, getNotes } from "./NoteDataProvider.js";
import { noteComponent } from "./Note.js";

const eventHub = document.querySelector("#mainContainer")
const noteHTML = document.querySelector(".noteContainer")

const NoteListComponent = () => {
  

  eventHub.addEventListener("showNoteButtonClicked", event => {
    getNotes().then(
      () => {
        const allNotes = useNotes()
        render(allNotes)
      }
    )
  })

  const render = noteCollection => {
    noteHTML.innerHTML = 
      noteCollection.map(
        (note) => {
          return noteComponent(note)
        }
      ).join("")
  }
}

export default NoteListComponent