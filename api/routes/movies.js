const router = require('express').Router();
const verify = require('../verifyToken')
const Movie = require("../models/Movie")


//CREATE
router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Novie(req.body);

        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie)
            

        }catch(err) {
            res.status(500).json(err)
        }

        
    } else{
        res.status(403).json("You are not allowed boss")
    }
})


//UPDATE
router.put('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {

        try {
            const updatedMovie = await Movie.findByIdUpdate(req.params.id, {$set: req.body,}, {new:true});
            res.status(200).json(updatedMovie)
            

        }catch(err) {
            res.status(500).json(err)
        }

        
    } else{
        res.status(403).json("You are not allowed boss")
    }
})


//DELETE
router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {

        try {
            await Movie.findByIdDelete(req.params.id);
            res.status(200).json("The moive has been deleted!!")
            

        }catch(err) {
            res.status(500).json(err)
        }

        
    } else{
        res.status(403).json("You are not allowed boss")
    }
})

//GET
router.get('/:id', verify, async (req, res) => {
  
        try {
            const movie = await Movie.findById(req.params.id);
            res.status(200).json(movie)
            

        }catch(err) {
            res.status(500).json(err)
        }

        
})


//DELETE
router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {

        try {
            await Movie.findByIdDelete(req.params.id);
            res.status(200).json("The moive has been deleted!!")
            

        }catch(err) {
            res.status(500).json(err)
        }

        
    } else{
        res.status(403).json("You are not allowed boss")
    }
})

//GET RANDOM
router.get('/random', verify, async (req, res) => {
    const type = req.query.type;
    let movie;
        try {
            if(type=== "series"){
                movie = await Movie.aggregate([
                {$match: {isSeries: true} }, 
                { $sample: {size: 1}},
                ]);
            } else {
                movie = await Movie.aggregate([
                    {$match: {isSeries: false} }, 
                    { $sample: {size: 1}},
                    ]);
            }
            res.status(200).json(movie)

        }catch(err) {
            res.status(500).json(err)
        }

        
})
module.exports = router