const axios = require('axios');
const { response } = require('express');

async function main() {
    const response = await axios.get('https://openlibrary.org/books/OL7353617M.json');
    const title = response.data.title;
    const local_id = response.data.local_id;

    console.log (title);
    console.log (local_id[0]);
}


main();

console.log (`ici-> ${process.argv}`)


