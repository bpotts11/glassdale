export const Facility = (facilityObject, criminals) => {
    return `
    <section class="facilities">
        <h3 class="facilityName">${facilityObject.facilityName}</h3>
        <div class="facility__details">
            <p>Security Level: ${facilityObject.securityLevel}</p>
            <p>Capacity: ${facilityObject.capacity}</p>
            <h4>Criminals</h4>
            <ul>
                ${criminals.map(c => `<li>${c.name}</li>`).join("")}
            </ul>
        </div>
    </section>
    `
}