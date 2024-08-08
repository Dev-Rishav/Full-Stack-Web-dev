const request=require('postman-request');


const url = 'https://api.weatherapi.com/v1/current.json?key=1c4000b60bb44db49a361321240708&q=37.8267,-122.4233'
request({url:url,json:true},(error,response)=>{ //json property automatically converts the response into json object
    console.log(response.body.current);
    // console.log("It is currently",response.body.current.temp_c," degrees out. It feels like",response.body.current.feelslike_c," degrees out.");
})
