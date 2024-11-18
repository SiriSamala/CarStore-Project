const express = require('express')
const router = express.Router();
const UsedCars = require('../models/UsedCarsModel')


router.get('/count', async (req, res) => {
    try {
        const count = await UsedCars.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const usedcars = await UsedCars.find()
        return res.status(200).json(usedcars)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {

        const { name, price, img ,yearsUsed,description} = req.body
        if (!name || !price || !img ||!yearsUsed ||!description) {
            return res.status(400).json({ message: "All fields required" })
        }

        const usedcar = new UsedCars({
            name,
            price,
            img,
            yearsUsed,
            description
        })
        await usedcar.save()
        return res.status(200).json(usedcar)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingcar = await UsedCars.findOne({ _id: id })
        if (!existingcar) {
            return res.status(404).json({ message: "Car not found" })
        }
        const updatedcar = await UsedCars.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedcar)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingcar = await UsedCars.findOne({ _id: id })
        if (!existingcar) {
            return res.status(404).json({ message: "Car not found" })
        }
        await UsedCars.findByIdAndDelete(id)
        return res.status(200).json({ message: "Car Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router
