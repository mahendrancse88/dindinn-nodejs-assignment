
const db = require('../models');
const sequelize  = require('sequelize');

const  validateLatLng = (lat, lng) => {    
    let pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');
    
    return pattern.test(lat) && pattern.test(lng);
  }

  const isLatitude = (lat) => {
    return isFinite(lat) && Math.abs(lat) <= 90;
  }
  
  const isLongitude = (lng) => {
    return isFinite(lng) && Math.abs(lng) <= 180;
  } 
const getGeoLocationDistance = async (req, res) => {
    try {

        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        const prize_value =  req.body.prize_value;
        let distance = req.body.distance;
        distance = distance.toLowerCase().replace("km", '');
        var isDistanceInt = /^\+?\d+$/.test(distance);
        if(latitude == '' || latitude == undefined )
            throw new Error('Latitude is required!');
        else if(longitude == '' || longitude == undefined )
            throw new Error('Longitude is required!');
        else if(distance == '' || distance == undefined)
            throw new Error('Distance is required!');
        else if(!isLatitude(latitude))   
            throw new Error('Latitude invaild'); 
        else if( !isLongitude(longitude) )   
            throw new Error('Longitude  invaild'); 
        else if (!isDistanceInt)
            throw new Error('Distance Must be Integer');       
        else if(parseInt(distance) != 1 && parseInt(distance) != 10)
            throw new Error('Distance Must be 1 or 10');   
        else if(prize_value != undefined) {
            var isPrizeValueInt = /^\+?\d+$/.test(prize_value);
            if (!isPrizeValueInt)
             throw new Error('Prize Value Must be Integer'); 
             else if(parseInt(prize_value)  < 10 || parseInt(prize_value) > 30)
             throw new Error('Prize Value Must be 10 to 30');        
        }   
        let sql;      
        if(prize_value == undefined)
         sql = 'SELECT *, (((acos(sin(('+latitude+'*pi()/180)) * sin((`latitude`*pi()/180)) + cos(('+latitude+'*pi()/180)) * cos((`latitude`*pi()/180)) * cos((('+longitude+'- `longitude`) * pi()/180)))) * 180/pi()) * 60 * 1.1515 * 1.609344) as distance FROM `treasures` HAVING distance <='+distance;
        else 
         sql = 'SELECT *, (((acos(sin(('+latitude+'*pi()/180)) * sin((`latitude`*pi()/180)) + cos(('+latitude+'*pi()/180)) * cos((`latitude`*pi()/180)) * cos((('+longitude+'- `longitude`) * pi()/180)))) * 180/pi()) * 60 * 1.1515 * 1.609344) as distance FROM `treasures` INNER JOIN money_values ON money_values.treasure_id = treasures.id AND money_values.amt ='+prize_value+' HAVING distance <='+distance;
        const getDistance = await db.sequelize.query(sql, {
            replacements: {},
            type: sequelize .QueryTypes.SELECT
        });

          
          return res.status(200).send({response: getDistance});
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

module.exports = {
    getGeoLocationDistance
}