

/*

console.log(chalk.green.bold("Success!"));
console.log(chalk.red("TEST"));
console.log(chalk.redBright("TEST"));
console.log(process.argv[0]);
 const command = process.argv[2];

console.log(process.argv)

if(command === 'add')
{
    console.log('Adding Note!')
}
else if (command === 'remove')
{
    console.log('Removing Note!')
} */
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command(
    {
        command: 'add',
        describe: 'Add a new note',
        builder:
        {
            title:
            {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            },
            body:
            {
                describe: 'Note Body',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    }
)

yargs.command(
    {
        command: 'remove',
        describe: 'Remove a note',
        builder:
        {
            title:
            {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.removeNote(argv.title);
        }
    }
)

yargs.command(
    {
        command: 'read',
        describe: 'Read a note',
        builder:
        {
            title:
            {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.readNote(argv.title);
        }
    }
)

yargs.command(
    {
        command: 'list',
        describe: 'List notes',
        handler() {
            notes.listNotes();
        }
    }
)

yargs.parse()
//console.log(yargs.argv)