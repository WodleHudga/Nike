const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
    res.send("<h2>Hello world</h2>");
})

app.listen(PORT, () => {
    console.log('API IS ALIVE ON PORT', PORT)
})