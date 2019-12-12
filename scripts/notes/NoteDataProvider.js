import NoteListComponent from "./NoteList.js"

export const saveNote = note => {
  return fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes)
}

let notes = []

export const useNotes = () => notes.slice()

export const getNotes = () => {
  return fetch('http://localhost:3000/notes')
  .then(response => response.json())
    .then(
      note => {
        console.table(note)
        notes = note.slice().reverse()
      }
    )
}

export const deleteNote = noteId => {
  return fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE"
  })
      .then(getNotes)
}