console.log("starting...");//this statement goes on the call stack above main()

setTimeout(()=>{
        console.log('2secs timer');
},2000)
//setTimeout is a call back function provided by node js.
//It gets store onto node apis call and then onto callback Queue according to the priority
//after call stack being empty and the main() being popped out of the call stack the event loop starts taking function from call back queue and put it in call stack
//explained in udemy lecture-30. Call stack, Callback Queue and Event Loop
setTimeout(()=>{
    console.log("0 timer");
},0)
console.log("Stopping...");
