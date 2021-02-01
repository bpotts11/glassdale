import { useCriminals } from "../criminals/CriminalProvider.js"

export const AssociatesList = (criminalObj) => {
    const contentContainer = document.querySelector(".associatesContainer")
    const HTMLRepresentation = `
    <h1>known associates for ${criminalObj.name}</h1>
    ${criminalObj.known_associates.map(associate => {
        return `
        <div id="alibi__modal" class="modal--parent">
        <div class="modal--content">
            <section class="associate__container">
                <div class="associate__name">${associate.name}</div>
                <div class="associate__alibi">${associate.alibi}</div>
                </section>
        </div >
        </div >`
    }).join("")}
    
    <button id="modal--close">Close Modal</button>`
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", event => {
    // console.log("Associates Clicked heard by list component")
    const selectedCriminalId = event.detail.criminalId
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminal) => criminal.id === selectedCriminalId)
    AssociatesList(selectedCriminal)
})


    // eventHub.addEventListener("click", event => {
    //     if(clickEvent.target.id.startsWith("modal--")){
    //         const [prefix, ] = clickEvent.target.id.split("--")

    //     }
    // })