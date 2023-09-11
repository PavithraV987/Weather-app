import axios from "axios";
const API_KEY="5193cc86736cc88cd67015eb81dc3243"
const URL="http://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=5193cc86736cc88cd67015eb81dc3243"
const fetchWeather= async (query)=>{
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            APPID:API_KEY 
        }
    })
    return data 
}
export default fetchWeather;