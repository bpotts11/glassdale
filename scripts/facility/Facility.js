export const Facility = (facilityObject, criminals) => {
    return `
    <div class="col-sm-4">
        <div class="card">
            <div class="facilities card-body">
                <h3 class="facilityName card-title">${facilityObject.facilityName}</h3>
                    <p class="card-text">Security Level: ${facilityObject.securityLevel}</p>
                    <p class="card-text">Capacity: ${facilityObject.capacity}</p>
                    <h4>Criminals</h4>
                    <ul class="card-text">
                        ${criminals.map(c => `<li>${c.name}</li>`).join("")}
                    </ul>
            </div>
        </div>
    </div>
    `
}