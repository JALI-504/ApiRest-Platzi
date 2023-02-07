const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {   
    const  productos  =  [] ;
    const { size } = req.query;
    const limit = size || 10;
        for ( let  index  =  0 ;  index  <  limit ;  index ++ ) {
            productos.push({
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
        });
    }
    res.json(productos);
});

router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'product 1',
        price: 1000
    });
});

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'product created',
        data: body
    });
});

module.exports = router;