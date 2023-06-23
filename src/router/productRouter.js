const express = require('express');
const router = express.Router();
const {getProduct, getAllProducts} = require('../database/products');


router.get('/', async (req, res) =>{
   try {
       const products = await getAllProducts();
       console.log(products);
       res.send({status: 'ok', data: products});
   }catch (e){
       res.status(401).send({status: 'failed', error: e.message})
   }


});


router.get('/:productId', async (req,res) =>{
    try{
        const product = await getProduct(req.params.productId);
        res.send({status: 'ok', data: product});

        if(!product){
            res.status(404).send({status: 'failed', error: 'product not found'});
            return;
        }

    }catch (e){
        res.status(401).send({status: 'failed', error: e.message})

    }

})

module.exports = router;