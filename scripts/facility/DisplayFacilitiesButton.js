const contentTarget = document.querySelector(".buttonContainer")
const eventHub = document.querySelector(".container-fluid")


export const DisplayFacilitiesButton = () => {
    contentTarget.innerHTML += `
    <li class="nav-item">
        <a class="nav-link" id='facilityButton'>Facilities</a>
    </li>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "facilityButton") {
        const facilitiesButtonClicked = new CustomEvent("FacilityClicked")
        eventHub.dispatchEvent(facilitiesButtonClicked)
    }
})