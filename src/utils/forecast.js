// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast

const request = require('request');

const forecast = (latitude, langitude, callback) => {

const url = 'https://api.darksky.net/forecast/64a13a6aa3357cf01ac5c50318dd526a/'+ latitude + ',' + langitude
 
request({url:url, json: true}, (error, { body }) =>{
    if(error){
      callback('unable to connect weather service', undefined)
    } else if(body.error){
       callback('unable to find location', undefined)
    } else {
        callback(undefined, body.daily.data[0].summary +  'it is currently '+ body.currently.temperature +' degree out there. there is'+ body.currently.precipProbability+ '% chance of rain');
    }
})


}

module.exports = forecast;