import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <form action="" id="noteForm">

        <div class="date">
            <label for="noteForm--date">Date</label>
            <input type="date" id="noteForm--date">
        </div>
        
        <div class="suspect">
            <label for="noteForm--suspect">Suspect:</label>
            <input type="text" id="noteForm--suspect"></input>
        </div>
        
        <div class="text">
            <label for="noteForm--text">Note:</label>
            <input type="text" id="noteForm--text"></input>
        </div>

        <div class="author">
            <label for="noteForm--author">Author:</label>
            <input type="text" id="noteForm--Author"></input>
        </div>
            
            <button id="saveNote">Save Note</button>
        </form>
        
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const date = document.querySelector("#noteForm--date").value
        const suspect = document.querySelector("#noteForm--suspect").value
        const text = document.querySelector("#noteForm--text").value
        const author = document.querySelector("#noteForm--author").value

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

// const NoteForm = () => {
//     // rest of the code here
// }
