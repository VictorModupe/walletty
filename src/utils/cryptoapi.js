import {XRapidAPIHost, XRapidAPIKey, XRapidAPIHostNews} from "./api"
import axios from axios;

//endpoints

const apiBaseUrl = "https://coinranking1.p.rapidapi.com";
const coinsUrl = `${apiBaseUrl}/coins?referenceCurrencyUuid=yh` ###########

const CryptoApiCall = async (endpoints, params) => {
    const options ={
        method: "GET",
        url: endpoints, //endpoints is a parameter while url is a property
        params: params ? params : {},
        headers:{
            "X-RapidAPI-KEY": `${XRapidAPIKey}`,
            "X-RapidAPI-HOST": `${XRapidAPIHost}`,
        },
    }; 

    try {
        const response = await axios.request(options)
        return response.data
    }   catch (error){
        console.log(error)
        return {}

    }
    export const FetchAllCoins = async () => {
        
    }
}

