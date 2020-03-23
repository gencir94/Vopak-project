const express = require('express');
const router = express.Router();
const Currenttempincovilha = require('../models/currenttempincovilha')
const axios = require('axios');
const params = {
  access_key: '803c5614b89f96adf5b65d8e49737213',
  query: 'Covilha'
}


//Get the tempratures
router.get ('/',async (req,res) => {

  try{
    const posts = await Currenttempincovilha.find();
    res.json(posts);
  } catch(err) {
    res.json({message:err});
  }

});

//Post a temperature
router.post('/', async (req,res) => {

axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
  
  const temperatureSave = response.data.current.temperature;
  const timestampSave = response.data.location.localtime;

  const currenttempincovilha =  new Currenttempincovilha ({
     temperature: temperatureSave,
     timestamp: timestampSave 
});
  currenttempincovilha
    .save()
    .then(result => {
       console.log(result);
       res.status(201).json({message:"Temperature added"});
     })
    .catch(err => {
       console.log(err);
       res.status(500).json({
       error: err
        });
     });
 
}).catch(error => {
    console.log(error);
  });


});

//Delete a specific temperature with the id
router.delete('/:postId', async (req,res) => {
    try {
       const removeCurrenttempincovilha = await Currenttempincovilha.remove({_id: req.params.postId});
       res.json(removeCurrenttempincovilha);
   }catch (err) {
       res.json({message : err});
   }
});

module.exports = router; 
