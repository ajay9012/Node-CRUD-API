const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())

//routes
//nodemon : when u use nodemon u don't have to stop your application and run again when u make a change
app.get('/', (req, res) => {
    res.send('HELLO NODE API')
}) 

app.get('/blog', (req, res) => {
    res.send('HELLO BLOG MY NAME IS Ajay Sharma')
}) 

app.post('/product', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect('mongodb+srv://admin:Mongodb@cluster0.3p6otff.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
    
}).catch((error) => {
    console.log('error')
})