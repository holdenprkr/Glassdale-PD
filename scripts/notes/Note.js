export const noteComponent = (note) => {
  return `
  <div class="noteCard">
  <h4>${note.suspect}</h4>
  <p>${note.text}</p>
  <p>${note.date}</p>
  </div>`
}