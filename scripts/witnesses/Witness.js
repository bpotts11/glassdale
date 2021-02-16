export const Witness = (witnessObj) => {
    return `
    <div class="witnessCard">
        <h4 class="witnessName">${witnessObj.name}</h4>
        <p class="witnessInfo">${witnessObj.statements}</p>
    </div>
    `
}