import { getWitness, useWitnesses } from "./WitnessProvider.js";
import { Witness } from "./Witness.js";

const eventHub = document.querySelector(".container")
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
    <h3>Witness Statements</h3>
    <section class="witness">
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