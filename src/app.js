const express = require('express')
const routerProducts = require('./routes/products.router.js')
const routerCarts = require('./routes/carts.router.js')
//const productosManager = new ProductManager()
//const carritoManager = new CartManager()


const app = express()
const PORT = 8080

//Midelware para poder trabajar con datos JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/products'
     /*   ,(req,res,next)=>{

            req.producManager=productosManager
            next()

        } */
        ,routerProducts)
app.use('/api/carts'
        /*   ,(req,res,next)=>{

            req.producManager=productosManager
            req.cartManager=carritoManager
            next()

        } */
        , routerCarts)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})