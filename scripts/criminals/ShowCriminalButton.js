const contentTarget = document.querySelector(".buttonContainer")

export const ShowCriminalButton = () => {
    contentTarget.innerHTML += `
    <button id='criminalButton'>Criminals</button>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "criminalButton") {
        const criminalButtonClicked = new CustomEvent("CriminalsClicked")
        eventHub.dispatchEvent(criminalButtonClicked)
    }
})