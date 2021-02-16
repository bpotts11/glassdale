const contentTarget = document.querySelector(".button__witnesses")

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = `
    <button id='witnessButton'> Witness Statements</button>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessButton") {
        const customEvent = new CustomEvent("WitnessClicked")
        eventHub.dispatchEvent(customEvent)
    }

})