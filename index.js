const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola este es mi Server!');
});
   
app.get('/nueva_ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

app.get('/productos', (req, res) => {   
    const  productos  =  [] ;
        for ( let  index  =  0 ;  index  <  100 ;  index ++ ) {
            productos.push({
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
        });
    }
    res.json(productos);
});


app.get('/productos/filter', (req, res) => {
    res.send('Yo soy un filter');
});

app.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'product 1',
        price: 1000
    });
});


app.get('/users',(req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    } else {
        res.send('No hay Parametros');
    }
});


app.get('/categorias/:categoryId/productos/:productoId', (req, res) => {
    const { categoryId, productoId } = req.params;
    res.json({
        categoryId,
        productoId,
        // name: 'product 1',
        // price: 1000
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
