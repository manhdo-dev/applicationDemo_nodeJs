require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerUser = require('./routes/user.route');

const port = require('./config/server');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Do Duc Manh'
    });
});

app.use('/users', routerUser);

app.listen(port, () => {
    console.log(`Server running...`)
})