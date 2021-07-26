import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js"

export const Criminal = (criminalObject, arrayOfFacilityObjects) => {
    return `
    <section class="criminals">
        <h3 class="criminalName">${criminalObject.name}</h3>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <h4>Facilities</h4>
            <ul>
                ${arrayOfFacilityObjects.map(f => `<li>${f.facilityName}</li>`).join("")}
            </ul>
            ${ShowAssociatesButton(criminalObject)}
        </div>
    </section>
    `
}