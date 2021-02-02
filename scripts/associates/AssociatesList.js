import { useCriminals } from "../criminals/CriminalProvider.js"

const contentContainer = document.querySelector(".associatesContainer")

export const AssociatesList = (criminalObj) => {
    const HTMLRepresentation = `
        <h1>Known associates for ${criminalObj.name}</h1>
        ${criminalObj.known_associates.map(associate => {
        return `
        <div id="alibi__modal" class="modal--parent">
        <div class="modal--content">
            <section class="associate__container">
                <div class="associate__name">${associate.name}</div>
                <div class="associate__alibi">Alibi:${associate.alibi}</div>
                </section>
        </div >
        </div >`
    }).join("")}
    
    <button id="modal--close">Close Modal</button>`

    contentContainer.innerHTML = HTMLRepresentation
}

const eventHub = document.querySelector(".container")
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