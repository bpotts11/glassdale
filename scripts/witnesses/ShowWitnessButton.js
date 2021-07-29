const contentTarget = document.querySelector(".buttonContainer")

export const ShowWitnessButton = () => {
    contentTarget.innerHTML += `
    <li class="nav-item">
        <a class="nav-link" id='witnessButton'>Witness Statements</a>
    </li>
    `
}

const eventHub = document.querySelector(".container-fluid")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessButton") {
        const witnessButtonClicked = new CustomEvent("WitnessClicked")
        eventHub.dispatchEvent(witnessButtonClicked)
    }
})