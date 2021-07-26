const contentTarget = document.querySelector(".buttonContainer")
const eventHub = document.querySelector(".container")

export const ShowOfficerButton = () => {
    contentTarget.innerHTML += `
    <button id='officerButton'>Officers</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "officerButton") {
        const officerButtonClicked = new CustomEvent("OfficersClicked")
        eventHub.dispatchEvent(officerButtonClicked)
    }
})