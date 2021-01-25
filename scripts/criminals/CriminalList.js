import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js"

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()

            let criminalsHTMLRepresentations = ""

            for (const criminal of criminalArray) {
                criminalsHTMLRepresentations += Criminal(criminal)
            }

            criminalsContainer.innerHTML = `
      <h3>Criminals</h3>
      <section class="criminalList">
        ${criminalsHTMLRepresentations}
      </section>
      `
        })
}