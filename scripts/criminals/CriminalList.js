import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";

const eventHub = document.querySelector(".container-fluid")
const criminalsContainer = document.querySelector(".infoContainer")

export const CriminalList = () => {
  getCriminals()
    .then(getCriminalFacilities)
    .then(getFacilities)
    .then(() => {
      const criminalsArray = useCriminals()
      const criminalFacilitiesArray = useCriminalFacilities()
      const facilitiesArray = useFacilities()

      render(criminalsArray, criminalFacilitiesArray, facilitiesArray)
    })
}

const render = (criminalCollection, crimFacCollection, facilityCollection) => {
  let criminalsHTMLRepresentations = ""

  for (const criminal of criminalCollection) {
    const arrayOfCrimFacObjects = crimFacCollection.filter(criminalFacility => criminal.id === criminalFacility.criminalId)

    const arrayOfFacilityObjects = arrayOfCrimFacObjects.map(criminalFacility => {
      const relatedFacilityObject = facilityCollection.find(facility => facility.id === criminalFacility.facilityId)
      return relatedFacilityObject
    })

    criminalsHTMLRepresentations += Criminal(criminal, arrayOfFacilityObjects)

  }

  criminalsContainer.innerHTML = `
  <h2>Criminals</h2>
  <div class="filter filters__crime"></div>
  <section class="criminalList row">
    ${criminalsHTMLRepresentations}
  </section>
  `
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
    const crimFacArray = useCriminalFacilities()
    const facilitiesArray = useFacilities()

    const filteredCriminalsArray = criminalArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
    render(filteredCriminalsArray, crimFacArray, facilitiesArray)
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
  const crimFacArray = useCriminalFacilities()
  const facilitiesArray = useFacilities()

  render(filteredCriminalsArray, crimFacArray, facilitiesArray)
})

eventHub.addEventListener("CriminalsClicked", () => CriminalList())

eventHub.addEventListener("WitnessClicked", () => {
  criminalsContainer.innerHTML = ""
})
eventHub.addEventListener("OfficersClicked", () => {
  criminalsContainer.innerHTML = ""
})
eventHub.addEventListener("FacilityClicked", () => {
  criminalsContainer.innerHTML = ""
})
eventHub.addEventListener("showNotesClicked", () => {
  criminalsContainer.innerHTML = ""
})
