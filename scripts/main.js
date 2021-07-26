import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { ShowCriminalButton } from "./criminals/ShowCriminalButton.js";
import { ShowWitnessButton } from "./witnesses/ShowWitnessButton.js";
import { DisplayFacilitiesButton } from "./facility/DisplayFacilitiesButton.js";
import { ShowOfficerButton } from "./officers/ShowOfficerButton.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { NoteForm } from "./notes/NoteForm.js";
import "./notes/NoteList.js";
import "./witnesses/WitnessList.js";
import "./facility/FacilityList.js";
import "./officers/OfficerList.js";


CriminalList()
ShowOfficerButton()
ShowCriminalButton()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()
ShowWitnessButton()
DisplayFacilitiesButton()