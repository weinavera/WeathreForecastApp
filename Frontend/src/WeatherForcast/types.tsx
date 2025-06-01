export type IWeatherForcast = {
    // DateOnly Date, int TemperatureC, string? Summary
    date: string,
    temperatureC: number,
    summary: string,
    temperatureF: number
}

export type IState = {
    WeatherForcasts : IWeatherForcast[],
    InfoMsg:string
}