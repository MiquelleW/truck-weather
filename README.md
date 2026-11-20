# truck-weather

## Endpoint

https://api.open-meteo.com/v1/forecast (Open-Meteo, GET)

## What I changed using the docs

I added `wind_speed_unit=mph`, `timezone=auto`, and `precipitation` to my weather API request.

Before: Wind speed was displayed in km/h, the time was in GMT, and precipitation was not displayed.

After: Wind speed is displayed in mph, the timezone is America/New_York, and precipitation is displayed with its unit.

## Live site

https://miquellew.github.io/truck-weather/
