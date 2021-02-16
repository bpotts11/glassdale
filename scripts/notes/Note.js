import { deleteNote } from "./NoteProvider.js"

export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <div class="criminalId">Suspect: ${criminalObject.name}</div>
            <div class="note__text">${noteObject.text}</div>
            <div class="note__author">Author: ${noteObject.author}</div>
            <div class="note__timestamp">Date: ${new Date(noteObject.date).toLocaleDateString('en-US')}</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}

const eventHub = document.querySelector(".container")

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