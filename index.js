const express = require('express');

const port = 8000;

const app = express();

app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    return res.render('index');
})

app.get('/buttons', (req, res) => {
    return res.render('buttons');
})

app.get('/cards', (req, res) => {
    return res.render('cards');
})

app.get('/color', (req, res) => {
    return res.render('color');
})

app.get('/border', (req, res) => {
    return res.render('border');
})

app.get('/animation', (req, res) => {
    return res.render('animation');
})

app.get('/other', (req, res) => {
    return res.render('other');
})

app.get('/login', (req, res) => {
    return res.render('login');
})

app.get('/register', (req, res) => {
    return res.render('register');
})

app.get('/password', (req, res) => {
    return res.render('password');
})

app.get('/404', (req, res) => {
    return res.render('404');
})

app.get('/blank', (req, res) => {
    return res.render('blank');
})

app.get('/charts', (req, res) => {
    return res.render('charts');
})

app.get('/tables', (req, res) => {
    return res.render('tables');
})



app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`Server Is Start on port :- ${port}`);
})