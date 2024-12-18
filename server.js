//server.js

const express = require('express');
const { iniciarDB,sequelize } = require('./config/database');
const politicoRouter = require ('./routes/rotaPolitico')
const app = express();
// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/politico', politicoRouter)

// route for handling requests from the Angular client
app.get('/api/message', (req, res) => {
    res.json({ message: 
            'Hello GEEKS FOR GEEKS Folks from the Express server!' });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

iniciarDB();

sequelize.sync({alter:true}).catch((erro)=>console.error(`Erro: ${erro}`))