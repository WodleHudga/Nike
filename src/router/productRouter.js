const express = require('express');
const router = express.Router();

router.get('/products/', (req, res) =>{
    res.send('get all products');

});



module.exports = router;