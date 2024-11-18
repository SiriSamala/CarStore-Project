const express=require('express')
const router =express.Router();
const Volkswagen=require('../models/VolkswagenModel')
 

router.get('/count',async(req,res)=>{
    try{
        const count =await Volkswagen.countDocuments()
        return res.status(200).json({count:count})
    }catch (error){
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const volkswagen = await Volkswagen.find()
        return res.status(200).json(volkswagen)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        
        const { name, price, img } = req.body
        if (!name || !price || !img ) {
            return res.status(400).json({ message: "All fields required" })
        }

        const volkswagen = new Volkswagen({
            name,
            price,
            img
        })
        await volkswagen.save()
        return res.status(200).json(volkswagen)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingcar = await Volkswagen.findOne({ _id: id })
        if (!existingcar) {
            return res.status(404).json({ message: "Car not found" })
        }
        const updatedcar = await Volkswagen.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedcar)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingcar = await Volkswagen.findOne({ _id: id })
        if (!existingcar) {
            return res.status(404).json({ message: "Car not found" })
        }
        await Volkswagen.findByIdAndDelete(id)
        return res.status(200).json({ message: "Car Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router
