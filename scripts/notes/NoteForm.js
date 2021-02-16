import { saveNote } from "./NoteProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const arrayofCriminals = useCriminals()
            render(arrayofCriminals)
        })
}

const render = (criminalsArray) => {
    contentTarget.innerHTML = `
        <div class="date">
            <label for="note-date">Date</label>
            <input type="date" id="note-date">
        </div>
        
        <div class="suspect">
            <label for="note-criminalId">Suspect:</label>
            <select id="note-criminalId">
                <option value="0">Please select a criminal...</option>
              ${criminalsArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")}
            </select>
        </div>
        
        <div class="text">
            <label for="note-text">Note:</label>
            <input type="text" id="note-text"></input>
        </div>

        <div class="author">
            <label for="note-author">Author:</label>
            <input type="text" id="note-author"></input>
        </div>
            
            <button id="saveNote">Save Note</button>
    `
}
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const criminalId = document.querySelector("#note-criminalId").value
        const text = document.querySelector("#note-text").value
        const author = document.querySelector("#note-author").value
        const date = document.querySelector("#note-date").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "criminalId": parseInt(criminalId),
            "text": text,
            "author": author,
            "date": date,
        }
        debugger
        // Change API state and application state
        saveNote(newNote)
    }
})
