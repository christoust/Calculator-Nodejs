const fs = require('fs');
const readlineSync = require('readline-sync');

function showMenu() {
    console.log('\nFile Manipulation Tool');
    console.log('1. Read File');
    console.log('2. Write to File');
    console.log('3. Exit\n');
}

function readFile() {
    const fileName = readlineSync.question('Enter file name: ');
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        console.log('\nFile content:');
        console.log(data);
    } catch (err) {
        console.error('\nError reading file:', err.message);
    }
}

function writeFile() {
    const fileName = readlineSync.question('Enter file name: ');
    const content = readlineSync.question('Enter content: ');
    try {
        fs.writeFileSync(fileName, content);
        console.log('\nFile written successfully');
    } catch (err) {
        console.error('\nError writing to file:', err.message);
    }
}

let choice;
do {
    showMenu();
    choice = readlineSync.question('Enter your choice: ');

    switch (choice) {
        case '1':
            readFile();
            break;
        case '2':
            writeFile();
            break;
        case '3':
            console.log('Exiting...');
            break;
        default:
            console.log('Invalid choice');
    }
} while (choice !== '3');
