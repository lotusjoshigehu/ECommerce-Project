const express=require('express')
const router=express.Router()

/*** 
//GET /users returns: "Fetching all users".
POST /users returns: "Adding a new user".
GET /users/:id returns: "Fetching user with ID: id".
***/

router.get('/',(req,res)=>
{
    res.send(`Fetching all users`)
})

router.post('/',(req,res)=>
{
    res.send(`Adding a new user`)
})

router.get('/:id',(req,res)=>
{
    const id=req.params.id
    res.send(`Fetching user with ID:${id}`)
})

module.exports=router