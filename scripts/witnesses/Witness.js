export const Witness = (witnessObj) => {
    return `
    <div class="col-sm-4">
        <div class="card">
            <div class="witnesses card-body">
                <h3 class="card-text">${witnessObj.name}</h3>
                <p class="card-text">${witnessObj.statements}</p>
            </div>
        </div>
    </div>
    `
}