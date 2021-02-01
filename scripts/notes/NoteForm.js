import { saveNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <div class="date">
            <label for="noteForm--date">Date</label>
            <input type="date" id="note-date">
        </div>
        
        <div class="suspect">
            <label for="noteForm--suspect">Suspect:</label>
            <input type="text" id="note-suspect"></input>
        </div>
        
        <div class="text">
            <label for="noteForm--text">Note:</label>
            <input type="text" id="note-text"></input>
        </div>

        <div class="author">
            <label for="noteForm--author">Author:</label>
            <input type="text" id="note-author"></input>
        </div>
            
            <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const date = document.querySelector("#note-date").value
        const suspect = document.querySelector("#note-suspect").value
        const text = document.querySelector("#note-text").value
        const author = document.querySelector("#note-author").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "date": date,
            "suspect": suspect,
            "text": text,
            "author": author
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
