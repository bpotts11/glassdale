import { useCriminals } from "../criminals/CriminalProvider.js"

const contentContainer = document.querySelector(".associatesContainer")

export const AssociatesList = (criminalObj) => {
    const HTMLRepresentation = `
    <div id="alibi__modal" class="modal--parent">
        <div class="modal--content">
            <h3>Known associates for ${criminalObj.name}</h3>
            ${criminalObj.known_associates.map(associate => {
        return `
                    <section class="associate__container">
                        <div class="associate__name">${associate.name}</div>
                        <div class="associate__alibi">Alibi:${associate.alibi}</div>
                    </section>`
    }).join("")}
            <button id="modal--close" class="btn btn-outline-dark">Close Modal</button>
        </div>
    </div>
    `

    contentContainer.innerHTML = HTMLRepresentation
}

const eventHub = document.querySelector(".container-fluid")
eventHub.addEventListener("AssociatesClicked", event => {
    // console.log("Associates Clicked heard by list component")
    const selectedCriminalId = event.detail.criminalId
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminal) => criminal.id === selectedCriminalId)
    AssociatesList(selectedCriminal)
})


eventHub.addEventListener("click", event => {
    if (event.target.id === "modal--close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
}