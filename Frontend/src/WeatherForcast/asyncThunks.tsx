import {useEffect, useState} from 'react'
import type {IState, IWeatherForcast} from './types'
import {createAsyncThunk, type ActionReducerMapBuilder} from "@reduxjs/toolkit"

export const GetWeatherForecast = createAsyncThunk<IWeatherForcast[]|undefined, string>(
    "GetWeatherForecast",
    async()=>{
        let result: IWeatherForcast[] = []; 
        try{
            const data = await fetch("http://localhost:5128/api/WeatherForcast");
            result = await data.json();
            return result;
        }
        catch(err){
            throw err;
        }
    }
)

export const GetWeatherForecastBuilder = (
    builder: ActionReducerMapBuilder<IState>
): void => {
    // sliceBuilder has 3 states
    builder.addCase(GetWeatherForecast.fulfilled, (state,{payload,...action})=>{
        let result = {
            ...state,
        };

        if (payload){
            result = {
                ...state,
                WeatherForcasts:  payload // payload is IWeatherForcast[] from fetch
            };
        }
        console.log('result in GetWeatherForecastBuilder:',result)
        return result;
    });
    builder.addCase(GetWeatherForecast.pending, (state, {payload})=>{});
    builder.addCase(GetWeatherForecast.rejected, (state, {payload})=>{});
}

export function GetWeatherForecast1 (){
    const [result, setResult] = useState<IWeatherForcast[]>([]);
    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost:5128/api/WeatherForcast", {
                method: "GET"
            });
            const jsonData = await data.json();
            setResult(jsonData);
        };
        api();
    }, []);

     console.log("result",result)

    return (

        <ul>
            <li key="date">"Date" |"Summary" | "TemperatureC" | "TemperatureF"</li>
            {result.map(r => (
                <li key={r.date}>
                {r.date} | {r.summary} | {r.temperatureC} | {r.temperatureF}
                </li>
            ))}
        </ul>
    )
}