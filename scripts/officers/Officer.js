export const Officer = (officerObj) => {
    return `
    <div class="col-sm-4">
        <div class="card">
            <div class="officers card-body">
                <h4 class="officerName card-title">${officerObj.name}</h4>
            </div>
        </div>
    </div>
`
}