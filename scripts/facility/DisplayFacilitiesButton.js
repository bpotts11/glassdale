const contentTarget = document.querySelector(".buttonContainer")
const eventHub = document.querySelector(".container")


export const DisplayFacilitiesButton = () => {
    contentTarget.innerHTML += `
    <button id='facilityButton'>Facilities</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "facilityButton") {
        const facilitiesButtonClicked = new CustomEvent("FacilityClicked")
        eventHub.dispatchEvent(facilitiesButtonClicked)
    }
})