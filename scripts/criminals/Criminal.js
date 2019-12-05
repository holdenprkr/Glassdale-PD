export const CriminalComponent = (criminal) => { 
  console.log("*****I AM THE CRIMINAL ITEM COMPONENT*****")
  return `
  <section class="criminalCard">
  <header class="criminalName">${criminal.name}</header>
  <div class="criminalAge">Age: ${criminal.age}</div>
  <div class="criminalCrime">Crime: ${criminal.conviction}</div>
  <div>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
  <div>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
  </section>
  `
}