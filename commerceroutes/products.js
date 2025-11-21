const express=require('express')
const router=express.Router()

/***
 GET /products returns: "Fetching all products".
POST /products returns: "Adding a new product".
GET /products/:id returns: "Fetching product with ID: id".

 ***/

router.get('/',(req,res)=>
{
    res.send(`Fetching all products`)
})

router.post('/',(req,res)=>
{
    res.send(`Adding a new product`)
})

router.get('/:id',(req,res)=>
{
    const id=req.params.id
    res.send(`Fetching user with ID:${id}`)
})

module.exports=router