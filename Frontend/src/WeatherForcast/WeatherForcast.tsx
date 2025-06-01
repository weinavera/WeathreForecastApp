import React, { use } from "react";
import {useAppSelector, useAppDispatch} from "../Store/hooks"
import { Selectors, Actions } from "./WeathreForcastSlice";

const WeatherForcast =() => {
    let dispatch=useAppDispatch();
    const WeatherForcasts = useAppSelector(Selectors.WeatherForcasts)
    const InfoMsg = useAppSelector(Selectors.InfoMesg)
    // const WeatherForcastSchema = useAppDispatch((state) =>)

    // )
}