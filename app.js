const express = require('express')

const app = express();

const path = require('path');

const port = 3030

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.resolve('./views/home.html')))
 
app.get('/register', (req, res) => res.sendFile(path.resolve('./views/register.html')))

app.get('/login', (req, res) => res.sendFile(path.resolve('./views/login.html')))

app.listen(port, () => console.log(`El servidor funcionando en el puerto ${port}`))






