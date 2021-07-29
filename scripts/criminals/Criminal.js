import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js"

export const Criminal = (criminalObject, arrayOfFacilityObjects) => {
    return `
    <div class="col-sm-4">
        <div class="card">
            <div class="criminals card-body">
                <h3 class="criminalName card-title">${criminalObject.name}</h3>
                    <p class="card-text">Convicted for ${criminalObject.conviction}</p>
                    <p class="card-text">Arrested by ${criminalObject.arrestingOfficer}</p>
                    <p class="card-text">Incarcerated between:
                        ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                        ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
                    </p>
                    <p class="card-text">Age: ${criminalObject.age}</p>
                    <h4>Facilities</h4>
                    <ul class="card-text">
                        ${arrayOfFacilityObjects.map(f => `<li>${f.facilityName}</li>`).join("")}
                    </ul>
                    ${ShowAssociatesButton(criminalObject)}
            </div>
        </div>
    </div>
    `
}
