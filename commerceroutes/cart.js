const express=require('express')
const router=express.Router()

router.get('/:userid',(req,res)=>
{
    const userid1=req.params.userid
    res.send(`Fetching user with ID:${userid1}`)
})

router.post('/:userid',(req,res)=>
{
    const userid2=req.params.userid
    res.send(`Adding product to cart for user with ID:${userid2}`)
})


module.exports=router