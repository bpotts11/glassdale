import { saveNote } from "./NoteProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const noteFormContainer = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container-fluid")

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const arrayOfCriminals = useCriminals()
            render(arrayOfCriminals)
        })
}

const render = (criminalsArray) => {
    noteFormContainer.innerHTML = `
    <h2>Notes:</h2>
    <form  action="" class="noteForm">
        <div class="form-group">
            <label for="note-date">Date</label>
            <input type="date" id="note-date" class="form-control">
        </div>
        
        <div class="form-group">
            <label for="note-criminalId">Suspect:</label>
            <select id="note-criminalId" class="form-control">
                <option value="0">Please select a criminal...</option>
              ${criminalsArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")}
            </select>
        </div>
        
        <div class="form-group">
            <label for="note-text">Note:</label>
            <input type="text" id="note-text" class="form-control"></input>
        </div>

        <div class="form-group">
            <label for="note-author">Author:</label>
            <input type="text" id="note-author" class="form-control"></input>
        </div>
            
            <button id="saveNote" class="btn btn-outline-dark">Save Note</button>
    </form>
    `
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const criminalId = document.querySelector("#note-criminalId").value
        const text = document.querySelector("#note-text").value
        const author = document.querySelector("#note-author").value
        const date = document.querySelector("#note-date").value
        // debugger
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "criminalId": parseInt(criminalId),
            "text": text,
            "author": author,
            "date": date,
        }
        // debugger
        // Change API state and application state
        saveNote(newNote)
    }
})
