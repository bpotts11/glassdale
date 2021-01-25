export const Criminal = (criminalObj) => {
    return `
    <div class="criminals">
        <p class="criminalName">${criminalObj.name}</p>
        <p class="criminalInfo">Age: ${criminalObj.age}</p>
        <p class="criminalInfo">Crime: ${criminalObj.conviction}</p>
        <p class="criminalInfo">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="criminalInfo"> Term end:${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
        `
}