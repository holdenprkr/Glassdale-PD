import { getCriminals } from "./criminals/CriminalDataProvider.js";
import CriminalListComponent from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import NoteFormComponent from "./notes/NoteForm.js";
import NoteListComponent from "./notes/NoteList.js";
import { getNotes } from "./notes/NoteDataProvider.js";

NoteFormComponent()

getConvictions().then(
  () => ConvictionSelect()
)

getCriminals().then(
  () => CriminalListComponent()
)

getNotes().then(() => NoteListComponent())