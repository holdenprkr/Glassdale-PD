import { CriminalComponent } from "./Criminal.js";
import { useCriminals } from "./CriminalDataProvider.js";

const criminalHTML = document.querySelector(".criminalsContainer")

const CriminalListComponent = () => {
  console.log("*****I AM THE CRIMINAL LIST COMPONENT*****")
  const criminalArray = useCriminals()
  criminalHTML.innerHTML += `
    ${
      criminalArray.map(
        (criminal) => {
          return CriminalComponent(criminal)
        }
      ).join("")
    }
  `
}

export default CriminalListComponent