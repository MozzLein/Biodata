const express = require('express')
const app = express()
const port = 3000;
const expressLayouts = require('express-ejs-layouts')

app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts)


const bioController = require('./app/controller/bioController.js');
app.use('/', bioController);

app.listen(port, ()=>{
    console.log(`Server start on http://localhost:${port}`)
})