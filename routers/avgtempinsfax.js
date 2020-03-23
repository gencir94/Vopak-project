const express = require('express');
const router = express.Router();
const Avgtempinsfax = require('../models/avgtempinsfax')
const axios = require('axios');
const params = {
  access_key: '803c5614b89f96adf5b65d8e49737213',
  query: 'Sfax',
  historical_date_start: '2019-06-01',
  historical_date_end: '2019-06-30'
}


//Get the temprature
router.get ('/',async (req,res) => {

  try{
    const posts = await Avgtempinsfax.find();
    res.json(posts);
  } catch(err) {
    res.json({message:err});
  }

});

//Post a temperature
router.post('/', async (req,res) => {

axios.get('http://api.weatherstack.com/historical', {params})
  .then(response => {
//My free subscrition plan does not support the historicaldata, for this reason i have taken the avg temperature in june from https://www.holiday-weather.com/sfax/averages/ for this reason the temperature added is equal to 24

// const temperatureSave = response.data.historical.avgtemp;

  const avgtempinsfax =  new Avgtempinsfax ({
     Average_temperature_June: "24"
});
  avgtempinsfax
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
       const removeAvgtempinsfax = await Avgtempinsfax.remove({_id: req.params.postId});
       res.json(removeAvgtempinsfax);
   }catch (err) {
       res.json({message : err});
   }
});

module.exports = router; 
