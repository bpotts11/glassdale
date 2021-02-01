// const eventHub = document.querySelector(".container")

// const dispatchStateChangeEvent = () => {
//     const noteStateChangedEvent = new CustomEvent("noteStateChanged")

//     eventHub.dispatchEvent(noteStateChangedEvent)
// }

// const getNotes = () => {
//     return fetch('http://localhost:8088/notes')
//         .then(response => response.json())
//         .then(parsedNotes => {
//             notes = parsedNotes
//         })

// }

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
}


// const eventHub =document.querySelector (".container")

// // Handle browser-generated click event in component
// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "saveNote") {

//         // Make a new object representation of a note
//         const newNote = {
//             // Key/value pairs here
//             date: document.querySelector("#noteForm--date").value,
//             suspect: document.querySelector("#noteForm--suspect").value,
//             text: document.querySelector("#noteForm--text").value,
//         }

//         // Change API state and application state
//         saveNote(newNote)
//     }
// })

// const NoteForm = () => {
//     // rest of the code here
// }