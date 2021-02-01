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

// const render = criminalCollection => {
//   contentTarget.innerHTML = you_fill_this_in
// }


