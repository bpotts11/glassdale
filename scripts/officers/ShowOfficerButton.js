const contentTarget = document.querySelector(".buttonContainer")
const eventHub = document.querySelector(".container-fluid")

export const ShowOfficerButton = () => {
    contentTarget.innerHTML += `
    <li class="nav-item">
        <a class="nav-link" id='officerButton'>Officers</a>
    </li>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "officerButton") {
        const officerButtonClicked = new CustomEvent("OfficersClicked")
        eventHub.dispatchEvent(officerButtonClicked)
    }
})