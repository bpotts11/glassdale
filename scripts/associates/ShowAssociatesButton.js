import "./AssociatesList.js"

export const ShowAssociatesButton = (criminalObject) => {
    return `
        <button id="associates--${criminalObject.id}" class="btn btn-outline-dark">Associate Alibis</button>
    `
}

const eventHub = document.querySelector(".container-fluid")
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")) {
        const [prefix, criminalId] = event.target.id.split("--")

        const customEvent = new CustomEvent("AssociatesClicked", {
            detail: {
                criminalId: parseInt(criminalId)
            }
        })
        // console.log("customEvent: ", customEvent)
        eventHub.dispatchEvent(customEvent)
    }
})