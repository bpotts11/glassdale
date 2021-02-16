const contentTarget = document.querySelector(".buttonContainer")

export const ShowWitnessButton = () => {
    contentTarget.innerHTML += `
    <button id='witnessButton'>Witness Statements</button>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessButton") {
        const witnessButtonClicked = new CustomEvent("WitnessClicked")
        eventHub.dispatchEvent(witnessButtonClicked)
    }
})