const request = require('request');

const forecast = ((latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=8778f4957dd45b48230545c2b4197695&query=' + latitude + ',' + longitude + ',-122.4233';
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to weather services');

        }else if(body.error){
            callback('Please provide valid coordinates for location');

        } else{
           const weather_description = body.current.weather_descriptions[0];
           const current_temp = body.current.temperature;
           const feels_like = body.current.feelslike;
            callback(undefined,weather_description +'. It is currently '+ current_temp +' degrees out. It feels like ' + feels_like + ' degrees out' );
        }
    })
});





module.exports = forecast