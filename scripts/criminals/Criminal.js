export const CriminalComponent = (criminal) => {
  console.log("*****I AM THE CRIMINAL ITEM COMPONENT*****")
  return `
  <section class="criminalCard">
  <header class="criminalName">${criminal.name}</header>
  <div class="criminalAge">Age: ${criminal.age}</div>
  <div class="criminalCrime">Crime: ${criminal.conviction}</div>
  <div>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
  <div>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>

  <button id="button--${criminal.name.split(" ").join("-")}">Interview Associates</button>
    <dialog class="dialog--criminal" id="details--${criminal.name.split(" ").join("-")}">
    <hr class="style-hr">
    ${criminal.known_associates.map(ass =>`
    <div>Name: ${ass.name}</div>
    <div>Alibi: ${ass.alibi}</div>
    <hr class="style-hr">`
    ).join("")}
    <button class="button--close">Close</button>
    </dialog>
  </section>
  `
}