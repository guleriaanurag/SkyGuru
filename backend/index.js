const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
require('dotenv').config();
const api_key = process.env.API_KEY;

app.use(cors());

app.listen(process.env.PORT || 3000,()=>{
    console.log(`connection established at http://localhost:${process.env.PORT}`);
})

app.get('/',(req,res)=>{
    res.send('SkyGuru backend active');
})

// CURRENT WEATHER

app.get('/weather/:lat/:long/:mode',async(req,res)=>{
    const latitude = req.params.lat;
    const longitude = req.params.long;
    const mode = req.params.mode;
    try{
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
            params : {
                lat : latitude,
                lon : longitude,
                appid : api_key,
                units : mode
            }
        });
        res.json(response.data);
    }
    catch(error){
        console.log(error)
        if(error.response){
            res.status(error.response.status).send(error.response.data.message);
        }
        else if(error.request){
            res.status(500).send('No response recieved from the api');
        }
        else{
            res.status(500).send('Internal server error');
        }
    }
})

// FORECAST ROUTES

function groupForecastDataByDate(weatherData){
    let dailyData = {};

    weatherData.forEach(obj=>{
        let date = obj.dt_txt.split(" ")[0];
        dailyData[date] = dailyData[date] || [];
        let{main,weather} = obj;
        let{temp_max,temp_min} = main;
        let{main:detail,icon} = weather[0];
        dailyData[date].push([temp_max,temp_min,detail,icon]);
    })

    let reducedData = Object.entries(dailyData).map(([date,entries])=>{

        let detailCount={};
        let maxTemp = Math.max(...entries.map(entry=>entry[0]));
        let minTemp = Math.min(...entries.map(entry=>entry[1]));
        entries.forEach(entry=>{
            let detail = entry[2];
            detailCount[detail] = (detailCount[detail] || 0)+1;
        })
        let detail = entries[0][2];
        let icon = entries[0][3];

        return [date,maxTemp.toFixed(0),minTemp.toFixed(0),detail,icon];
    })

    return reducedData.slice(1);
}

app.get('/weather-forecast/:lat/:long/:mode',async (req,res)=>{
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast',{
            params : {
                lat : req.params.lat,
                lon : req.params.long,
                appid : api_key,
                units : req.params.mode
            }
        })
        res.send(groupForecastDataByDate(response.data.list));
    } catch (error) {
        console.log(error)
        if(error.response){
            res.status(error.response.status).send(error.response.data);
        }
        else if(error.request){
            res.status(500).send('No response recieved from the api');
        }
        else{
            res.status(500).send('Internal server error');
        }
    }
})

// AIR POLLUTION ROUTE

app.get('/airpollution/:lat/:long/',async (req,res)=>{
    try {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/air_pollution',{
            params : {
                lat : req.params.lat,
                lon : req.params.long,
                appid : api_key
            }
        })
        res.send(response.data);
    } catch (error) {
        if(error.response){
            res.status(error.response.status).send(error.response.data.message);
        }
    }
})

// GEOCODE ROUTE

app.get('/geocode/:cityname',async(req,res)=>{
    try {
        const response = await axios.get('http://api.openweathermap.org/geo/1.0/direct',{
            params : {
                q : req.params.cityname,
                limit : 1,
                appid : api_key
            }
        })
        const coordinates = {
            lat : response.data[0].lat,
            lon : response.data[0].lon
        }
        res.send(coordinates);
    } catch (error) {
        console.log(error);
    } 
})