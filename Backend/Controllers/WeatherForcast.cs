using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForcastController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<WeatherForecast>> GetForecastAsync()
        {
            var summaries = new[]
            {
                "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
            };
            var forecast = await Task.Run(() =>
            {

                return Enumerable.Range(1, 5).Select(index =>
                   new WeatherForecast
                   (
                       DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                       Random.Shared.Next(-20, 55),
                       summaries[Random.Shared.Next(summaries.Length)]
                   )).ToList();

            });
            return forecast;
        }
    }
    
    public record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
        {
            public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        }
}