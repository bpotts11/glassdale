const contentTarget = document.querySelector(".buttonContainer")
const eventHub = document.querySelector(".container-fluid")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        // debugger
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNoteButton = () => {
    contentTarget.innerHTML += `
    <li class="nav-item">
        <a class="nav-link" id='showNotes'>Show Notes</a>
    </li>
    `
}