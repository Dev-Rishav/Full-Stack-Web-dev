import { useState,useEffect } from "react";

function useCurrencyInfo(currency){

    const [data,setData]=useState({});

    useEffect( () =>{
        fetch(`https://api.frankfurter.app/latest`)
        .then( res => res.json())       //using multiple this are called chaining and can be done N-no of times
        .then ( res => setData(res[currency])); //res is an object and currency is its property we can use '[]' instead of "."
        //this fetch function collects data from the api and the currency variable is to pass the conversion currency form 
        //Often api returns values in string format so we need to convert them in json format
        // console.log(data);
    },[currency])   //currency is added as an dependency because we want to  update the api call whenever the value of currency changes
    return data;
}

export default useCurrencyInfo;


//TODO api is not responding
//TODO change the fields for new api