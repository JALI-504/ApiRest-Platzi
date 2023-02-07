const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola este es mi Server!');
});
   
app.get('/nueva_ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
