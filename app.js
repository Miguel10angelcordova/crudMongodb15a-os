const express =  require('express');
const app = express();
const path = require('path');

const db = require('./db')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); 



app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

const Invitados = require('./routes/Invitados')
app.use(Invitados)


app.get('/', (req, res) => {
    res.send('hola mundo')
})


app.listen(3000, () => {
    console.log('Server is running en http://localhost:3000')
})


