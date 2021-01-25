import { getConvictions, useConvictions } from "./ConvictionProvider.js";

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

const render = convictionsCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(convictionObject => {
        const crimeList = convictionObject.name
        return `<option>${crimeList}</option>`
    }
    )

        }
    </select>
    `
}