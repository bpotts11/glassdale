import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

// Query the DOM for the element that your notes will be added to 
const noteContainer = document.querySelector(".infoContainer")
const eventHub = document.querySelector(".container-fluid")

let allNotes = []
let allCriminals = []

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            allNotes = useNotes()
            allCriminals = useCriminals()
            render()
        })
}

const render = () => {
    const allNotesConvertedToStrings = allNotes.map(noteObject => {
        const relatedCriminalObject = allCriminals.find(criminal => criminal.id === noteObject.criminalId)
        return NoteHTMLConverter(noteObject, relatedCriminalObject)
        // debugger

        // convert the notes objects to HTML with NoteHTMLConverter
    }).join("")

    noteContainer.innerHTML = `
        <h2>Case Notes</h2>
        <section class="noteList row">
            ${allNotesConvertedToStrings}
        </section>
    `
}


eventHub.addEventListener("showNotesClicked", () => NoteList())

eventHub.addEventListener("noteStateChanged", () => {
    if (noteContainer.innerHTML !== "") {
        NoteList()
    }
})

eventHub.addEventListener("WitnessClicked", () => {
    noteContainer.innerHTML = ""
})
eventHub.addEventListener("OfficersClicked", () => {
    noteContainer.innerHTML = ""
})
eventHub.addEventListener("FacilityClicked", () => {
    noteContainer.innerHTML = ""
})
eventHub.addEventListener("CriminalsClicked", () => {
    noteContainer.innerHTML = ""
})