const express = require('express');
const bodyParser = require('body-parser')
//ROUTERS
const authRoutes = require('./routers/auth').router;
const teamsRoutes = require('./routers/teams').router;

const app = express();

const port = 3000;

app.get('/', (req, res) => {

    res.status(200).send('Hello World!');  
});

app.use('/auth', authRoutes);
app.use('/teams', teamsRoutes);


app.listen(port, () => {
    console.log('El servidor se inició en el puerto 3000');
});

exports.app = app;