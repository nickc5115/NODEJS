const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'));
    }
    else {
        console.log(chalk.bgRed('Title in use!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const removedNoteList = notes.filter((note) => note.title !== title)

    if (removedNoteList.length === notes.length) {
        console.log(chalk.bgRed("No note found for title: " + title));
    }
    else {
        console.log(chalk.bgGreen("Removing note titled: " + title))
        saveNotes(removedNoteList);
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find(note => note.title === title)

    if (foundNote) {
        console.log(chalk.bold.green(foundNote.title));
        console.log(chalk.green(foundNote.body));
    }
    else {
        console.log(chalk.red("No note found for title: " + title));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes:'));
    loadNotes().forEach(element => {
        console.log(element.title)
    });
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

module.exports =
{
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}