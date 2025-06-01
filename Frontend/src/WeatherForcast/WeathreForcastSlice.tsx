import {createSlice, type PayloadAction, type WithSlice} from "@reduxjs/toolkit";
import type { IState } from "./types";
import { GetWeatherForecast, GetWeatherForecastBuilder } from "./asyncThunks";
import type { RootState } from "../Store/store";
import { rootReducer } from "../Store/reducers";

let initState:IState = {
    WeatherForcasts:[],
    InfoMsg:""
}

export const WeatherForcastChannel = createSlice({
    name: "Weather",
    initialState:initState,
    reducers:{
        updateInfoMsg:(state, action: PayloadAction<string>) =>{
            return{
                ...state,
                InfoMsg: action.payload
            };
        }
    },
    extraReducers(builder){
        GetWeatherForecastBuilder(builder);
    }
})

declare module "../Store/reducers" {
    export interface LayzyLoadedSlices extends WithSlice<typeof WeatherForcastChannel>{}

}

export const injectdBackupAgentInstRequestSlice = WeatherForcastChannel.injectInto(rootReducer)

export const Selectors = {
    WeatherForcasts: (state:RootState) =>  state.Weather?.WeatherForcasts,
    InfoMesg: (state: RootState) => state.Weather?.InfoMsg
}

export const Actions = {
    GetWeatherForecast,
    updateInfoMsg:WeatherForcastChannel.actions.updateInfoMsg
}