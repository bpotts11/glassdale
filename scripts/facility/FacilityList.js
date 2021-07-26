import { getFacilities, useFacilities } from "./FacilityProvider.js";
import { Facility } from "./Facility.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";

const eventHub = document.querySelector(".container")
const facilityContainer = document.querySelector(".infoContainer")

export const FacilityList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(() => {
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            render(criminals, facilities, crimFac)
        })
}

const render = (criminals, facilities, crimFac) => {
    facilityContainer.innerHTML = `
    <h2>Facilities</h2>
    <section class="facilitiesList">
    ${facilities.map(facility => {
        const criminalRelationshipsForThisFacility = crimFac.filter(cf => cf.facilityId === facility.id)

        const criminalsAtThisFacility = criminalRelationshipsForThisFacility.map(cf => {
            const matchingCriminalObj = criminals.find(criminal => criminal.id === cf.criminalId)
            return matchingCriminalObj
        })
        return Facility(facility, criminalsAtThisFacility)
    }).join("")
        }
    </section>
    `
}
eventHub.addEventListener("FacilityClicked", () => {
    FacilityList()
})

eventHub.addEventListener("WitnessesClicked", () => {
    facilityContainer.innerHTML = ""
})

eventHub.addEventListener("CriminalsClicked", () => {
    facilityContainer.innerHTML = ""
})

eventHub.addEventListener("OfficersClicked", () => {
    facilityContainer.innerHTML = ""
})