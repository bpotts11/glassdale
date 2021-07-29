import { getConvictions, useConvictions } from "./ConvictionProvider.js";

const eventHub = document.querySelector(".container-fluid")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

const render = convictionsCollection => {
    contentTarget.innerHTML = `
    <select id="crimeSelect" class="form-control">
        <option value="0">Conviction</option>
            ${convictionsCollection.map(conviction => `<option value="${conviction.id}">${conviction.name}</option>`).join("")
        }
    </select >
    `
}

eventHub.addEventListener("officerSelected", crimeChosenEvent => document.querySelector("#crimeSelect").value = 0)