const express=require('express');
const router=express.Router();
const Empl=require('../models/models.js')
router.get('/',async(req,res)=>{
    //res.send("Get Request");
    try{
        const empl=await Empl.find()
        res.json(empl)
    }
    catch(err){
         res.send("Error " +err);
    }
    
})
router.get('/:id',async(req,res)=>{
    //res.send("Get Request");
    try{
        const empl=await Empl.findById(req.params.id);
        res.json(empl)
    }
    catch(err){
         res.send("Error " +err);
    }
    
})
router.post('/',async(req,res)=>{   
       console.log(req.body);
       const empl=new Empl({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
        
    })
    
    try{
        const a1=await empl.save()
        res.json(a1);
    }catch(err){
        res.send(err);
    }

})
router.patch('/:id',async(req,res)=>{
    try{
    const empl=await Empl.findById(req.params.id);
    empl.sub=req.body.sub
    const a1=await empl.save()
    res.json(a1);
    }catch(err){
       res.send(err);
    }
})

module.exports= router