import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js";

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")

// Render ALL criminals initally
export const CriminalList = () => {

  getCriminals()
    .then(() => {
      const appStateCriminals = useCriminals()
      renderToDom(appStateCriminals)
    })
}

const renderToDom = criminalCollection => {
  let criminalsHTMLRepresentations = ""

  for (const criminal of criminalCollection) {
    criminalsHTMLRepresentations += Criminal(criminal)
  }

  criminalsContainer.innerHTML = `
  <h3>Criminals</h3>
  <section class="criminalList">
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

    const filteredCriminalsArray = criminalArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
    renderToDom(filteredCriminalsArray)
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
  renderToDom(filteredCriminalsArray)
})