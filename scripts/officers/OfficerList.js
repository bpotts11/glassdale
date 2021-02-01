import { Officer } from "./Officer.js";
import { getOfficers, useOfficers } from "./OfficerProvider.js";

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
        <h3>Glassdale Officers</h3>
        <section class=officerList>
            ${officersHTMLRepresentations}
        </seciotn>
        `
        })
}