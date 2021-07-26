export const Facility = (facilityObject, criminals) => {
    return `
    <article class="facilities">
    <h4 class="facilityName">${facilityObject.facilityName}</h4>
    <div>
        <p class="facilityInfo">Security Level: ${facilityObject.securityLevel}</p>
        <p class="facilityInfo">Capacity: ${facilityObject.capacity}</p>
    </div>
    <h4>Criminals</h4>
    <ul>
        ${criminals.map(c => `<li>${c.name}</li>`).join("")}
    </ul>
    </article>
    `
}