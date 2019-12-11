import { CriminalComponent } from "./Criminal.js";
import { useCriminals } from "./CriminalDataProvider.js";

const eventHub = document.querySelector("#mainContainer")
const criminalHTML = document.querySelector(".criminalsContainer")

const CriminalListComponent = () => {
  // Load the application state to be used by this component
  const appStateCriminals = useCriminals()

  // What should happen when detective selects a crime?
  eventHub.addEventListener("crimeSelected", event => {
    // You remembered to add the id of the crime to the event detail, right?
    const crimeId = event.detail.crime
    /*
        Filter the criminals application state down to the people that committed the crime
    */
    const matchingCriminals = appStateCriminals.filter(
      (crime) => {
        if (crime.conviction === crimeId) {
          return appStateCriminals
        }
      })
    render(matchingCriminals)
  })
  /*
      Then invoke render() and pass the filtered collection as
      an argument
  */
  eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("button--")) {
      const dialogSiblingSelector = `#${e.target.id}+dialog`
      const theDialog = document.querySelector(dialogSiblingSelector)
      theDialog.showModal()
    } else if (e.target.classList.contains("button--close")) {
      const dialogElement = e.target.parentNode
      dialogElement.close()
    }
  })


  const render = crimeCollection => {
    criminalHTML.innerHTML = `
      ${
      crimeCollection.map(
        (criminal) => {
          return CriminalComponent(criminal)
        }
      ).join("")
      }`
  }
  render(appStateCriminals)
}

export default CriminalListComponent