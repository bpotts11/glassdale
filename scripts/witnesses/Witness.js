export const Witness = (witnessObj) => {
    return `
    <section class="witnesses">
        <h3 class="witnessName">${witnessObj.name}</h3>
        <div>
            <p>${witnessObj.statements}</p>
        </div>
        </section>
    `
}