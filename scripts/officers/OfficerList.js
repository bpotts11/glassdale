import { Officer } from "./Officer.js";
import { getOfficers, useOfficers } from "./OfficerProvider.js";

const eventHub = document.querySelector(".container-fluid")
const officersContainer = document.querySelector(".infoContainer")

export const OfficerList = () => {

    getOfficers()

        .then(() => {
            const officerArray = useOfficers()

            let officersHTMLRepresentations = ""

            for (const officer of officerArray) {
                officersHTMLRepresentations += Officer(officer)
            }

            officersContainer.innerHTML = `
        <h2>Glassdale Officers</h2>
        <section class="officerList row">
            ${officersHTMLRepresentations}
        </section>
        `
        })
}

eventHub.addEventListener("OfficersClicked", () => OfficerList())

eventHub.addEventListener("CriminalsClicked", () => {
    officersContainer.innerHTML = ""
})
eventHub.addEventListener("FacilityClicked", () => {
    officersContainer.innerHTML = ""
})
eventHub.addEventListener("WitnessClicked", () => {
    officersContainer.innerHTML = ""
})
eventHub.addEventListener("showNotesClicked", () => {
    officersContainer.innerHTML = ""
})