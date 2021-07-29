import { getOfficers, useOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector(".container-fluid")
const contentTarget = document.querySelector(".filters__officer")


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const officerSelectedCustomEvent = new CustomEvent("officerSelected", {
            detail: {
                selectedOfficerName: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(officerSelectedCustomEvent)
    }
})

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
}

const render = officerCollection => {
    contentTarget.innerHTML = `
    <select id="officerSelect" class="form-control">
        <option value="0">Officer</option>
            ${officerCollection.map(officer => `<option value="${officer.name}">${officer.name}</option>`).join("")
        }
    </select >
    `
}

eventHub.addEventListener("crimeChosen", crimeChosenEvent => document.querySelector("#officerSelect").value = 0)