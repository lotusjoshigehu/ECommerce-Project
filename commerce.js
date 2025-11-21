const express=require('express')
const app=express()

const cartRouter=require('./commerceroutes/cart')
const productsRouter=require('./commerceroutes/products')
const usersRouter=require('./commerceroutes/users')

app.use('/cart',cartRouter)
app.use('/products',productsRouter)
app.use('/users',usersRouter)

app.listen(4000,()=>
{
    console.log("server is running on 4000")
})