const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('Welcome To Header Seaction');

})

app.get('/footer',(req,res) => {
    res.send('Welcome To Footer Seaction');

})

app.get('/contact',(req,res) => {
    res.send('Welcome To Contact Seaction');

})

app.listen(5500);