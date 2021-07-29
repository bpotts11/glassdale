import { deleteNote } from "./NoteProvider.js"

export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
    <div class="col-sm-4">
        <div class="card">
            <div class="notes card-body">
                <p class="card-text">Suspect: ${criminalObject.name}</p>
                <p class="card-text">${noteObject.text}</p>
                <p class="card-text">Author: ${noteObject.author}</p>
                <p class="card-text">Date: ${new Date(noteObject.date).toLocaleDateString('en-US')}</p>
                <button id="deleteNote--${noteObject.id}" class="btn btn-outline-dark">Delete</button>
            </div>
        </div>
    </div>
    `
}

const eventHub = document.querySelector(".container-fluid")

eventHub.addEventListener("click", clickEvent => {
    // debugger
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.
        */
        deleteNote(id)
    }
})