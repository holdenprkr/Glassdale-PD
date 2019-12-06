import { getCriminals } from "./criminals/CriminalDataProvider.js";
import CriminalListComponent from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";


getConvictions().then(
  () => ConvictionSelect()
  )
      
getCriminals().then(
  () => CriminalListComponent()
  )