export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <div class="criminalId">Suspect: ${criminalObject.name}</div>
            <div class="note__text">${noteObject.text}</div>
            <div class="note__author">Author: ${noteObject.author}</div>
            <div class="note__timestamp">Date: ${new Date(noteObject.date).toLocaleDateString('en-US')}</div>
        </section>
    `
}