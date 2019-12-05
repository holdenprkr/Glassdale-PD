import { getCriminals } from "./criminals/CriminalDataProvider.js";
import CriminalListComponent from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";

getCriminals().then(
  () => CriminalListComponent()
)

getConvictions().then(
  () => ConvictionSelect()
)