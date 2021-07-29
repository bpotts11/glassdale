const contentTarget = document.querySelector(".buttonContainer")

export const ShowCriminalButton = () => {
    contentTarget.innerHTML += `
    <li class="nav-item">
        <a class="nav-link" id='criminalButton'>Criminals</a>
    </li>
    `
}

const eventHub = document.querySelector(".container-fluid")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "criminalButton") {
        const criminalButtonClicked = new CustomEvent("CriminalsClicked")
        eventHub.dispatchEvent(criminalButtonClicked)
    }
})