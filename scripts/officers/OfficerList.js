import { Officer } from "./Officer.js";
import { getOfficers, useOfficers } from "./OfficerProvider.js";

const eventHub = document.querySelector(".container")
const officersContainer = document.querySelector(".officersContainer")

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
        <section class=officerList>
            ${officersHTMLRepresentations}
        </section>
        `
        })
}

eventHub.addEventListener("OfficersClicked", () => OfficerList())