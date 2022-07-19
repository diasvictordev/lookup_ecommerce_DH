const express = require('express');
const app = express();
const methodOverride = require('method-override');

const mainRouter = require('./src/routes/mainRouter');
const userRouter = require('./src/routes/userRouter');

const path = require('path');

app.use(express.json());

app.use(methodOverride());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/usuario', userRouter);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

app.listen('3000', (req,res) => console.log('Servidor rodando na porta http://localhost:3000!'));
