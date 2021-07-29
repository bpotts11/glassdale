import { getWitness, useWitnesses } from "./WitnessProvider.js";
import { Witness } from "./Witness.js";

const eventHub = document.querySelector(".container-fluid")
const witnessContainer = document.querySelector(".infoContainer")

const WitnessList = () => {

    getWitness()
        .then(() => {
            const witnessArray = useWitnesses()
            // console.log('witnessArray: ', witnessArray);
            renderToDom(witnessArray)
        })
}

const renderToDom = (witnessCollection) => {
    let witnessHTMLRepresentation = ""

    for (const witness of witnessCollection) {
        witnessHTMLRepresentation += Witness(witness)
    }

    witnessContainer.innerHTML = `
    <h2>Witness Statements</h2>
    <section class="witnessList row">
        ${witnessHTMLRepresentation}
    </section>
    `
}

eventHub.addEventListener("WitnessClicked", () => {
    WitnessList()
})
eventHub.addEventListener("CriminalsClicked", () => {
    witnessContainer.innerHTML = ""
})
eventHub.addEventListener("FacilityClicked", () => {
    witnessContainer.innerHTML = ""
})
eventHub.addEventListener("OfficersClicked", () => {
    witnessContainer.innerHTML = ""
})
eventHub.addEventListener("showNotesClicked", () => {
    witnessContainer.innerHTML = ""
})