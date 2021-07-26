import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".infoContainer")

// Render ALL criminals initally
export const CriminalList = () => {
  getCriminals()
    .then(getCriminalFacilities)
    .then(getFacilities)
    .then(() => {
      const facilities = useFacilities()
      const crimFac = useCriminalFacilities()
      const criminals = useCriminals()

      // Pass all three collections of data to render()
      render(criminals, facilities, crimFac)
    })
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  criminalsContainer.innerHTML = criminalsToRender.map(
    (criminalObject) => {
      // Step 2 - Filter all relationships to get only ones for this criminal
      const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

      // Step 3 - Convert the relationships to facilities with map()
      const facilities = facilityRelationshipsForThisCriminal.map(cf => {
        const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
        return matchingFacilityObject
      })

      // Must pass the matching facilities to the Criminal component
      return Criminal(criminalObject, facilities)
    }
  ).join("")
}



// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', crimeChosenEvent => {

  if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
    const convictionsArray = useConvictions()

    const chosenConvictionObject = convictionsArray.find(convictionObj => {
      // console.log(convictionObj)
      return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
    })

    const criminalArray = useCriminals()

    const filteredCriminalsArray = criminalArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
    render(filteredCriminalsArray)
  }
})



eventHub.addEventListener("officerSelected", event => {
  // How can you access the officer name that was selected by the user?
  const officerName = event.detail.selectedOfficerName

  // How can you get the criminals that were arrested by that officer?
  const criminals = useCriminals()
  const filteredCriminalsArray = criminals.filter(
    criminalObject => {
      if (criminalObject.arrestingOfficer === officerName) {
        return true
      }
    }
  )
  render(filteredCriminalsArray)
})

eventHub.addEventListener("WitnessClicked", () => {
  criminalsContainer.innerHTML = ""
})

eventHub.addEventListener("CriminalsClicked", () => CriminalList())