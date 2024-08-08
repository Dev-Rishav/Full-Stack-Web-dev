const request=require('postman-request');


const url = 'https://api.weatherapi.com/v1/current.json?key=1c4000b60bb44db49a361321240708&q=37.8267,-122.4233'
request({url:url,json:true},(error,response)=>{ //json property automatically converts the response into json object
    console.log(response.body.current);
    // console.log("It is currently",response.body.current.temp_c," degrees out. It feels like",response.body.current.feelslike_c," degrees out.");
})


const geolocation = (data,callback)=>{
    const query=data;
    const geoUrl="https://us1.locationiq.com/v1/search?key=pk.1e2b8534b90d68587fb6032dd1d927c6&q="+query+"&format=json&"
    callback(geoUrl);
}

const weatherFetch=()=>{
        geolocation()
}
