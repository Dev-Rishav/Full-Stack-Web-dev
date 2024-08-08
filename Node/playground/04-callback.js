setTimeout(() => {
    console.log("2secs gone!");
}, 2000);

// const geolocation = (address,callback)=>{
//     setTimeout(() => {
//         const data ={
//             latitude:0,
//             longitude:0
//         }
//         return data
//     }, 2000);
// }

// const data = geolocation("Bhopal");
// console.log(data); //* this will print undefined for the above function cause the function expexts a return value immediately but the seTimeout() will retunr after 2 secs thatswhy the function geolocation is not able to return a value in time so JS by default returns an undefined object.

//?to overcome this scenario and use node asynchronously we need to use the callback function

const geolocation = (address,callback)=>{
    setTimeout(() => {
        const data ={
            latitude:0,
            longitude:0
        }
        callback(data); //*passing the data object through the callback function will allow us to use it while invoking the function geolocation() using arrowfunction.
    }, 2000);
}

geolocation("Bhopal",(data)=>{      //*same naming is not required but the order of arguement should be kept in mind.
    console.log(data);
});


//Challenge
//Define an add function that accepts the correct arguements
//Use setTimeout to simulate a 2 secs delay
//After 2 secs are up, call the callback function with the sum.


const add=(x,y,callback)=>{
    setTimeout(() => {
        const sum=x+y;
    callback(sum);
    }, 2000);
}

add(1,4,(sum)=>{
    console.log("The sum is = ",sum);
})
