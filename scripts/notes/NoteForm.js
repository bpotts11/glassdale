const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <form action="" id="noteForm">

        <div class="date">
            <label for="noteForm--date">Date</label>
            <input type="date" id="noteForm--date">
        </div>
        
        <div class="suspecet">
            <label for="noteForm--suspect">Suspect</label>
            <select class="suspect" id="noteForm--suspect" name="suspect">
                <option value=""></option>
            </select>
        </div>
        
        <div class="text">
            <label for="noteForm--text">Note Text</label>
            <input type="text" id="noteForm--text"></input>
        </div>
            
            <button id="saveNote">Save Note</button>
        </form>
        
    `
}

export const NoteForm = () => {
    render()
}
