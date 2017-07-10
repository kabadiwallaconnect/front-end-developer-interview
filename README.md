# Kabadiwalla Connect Front End Developer Task

The task here is to build a simple angular application that gives weather updates for a city that user searches for.

The weather data can be obtained from OpenWeatherMap API. The API can fetch both current weather data as well as that of past 5 days in 3 hour intervals. In this app, let us allow the user to either get current weather data for a given city or get past 5 readings. API documentation for [current forecast data](http://openweathermap.org/current), and [5 day / 3 hour forecast data](http://openweathermap.org/forecast5). Use the 'cnt' parameter to limit the number of forecast data fetched.

The basic structure for the app is already created. API base url and API keys have been declared as constants. Create a service to fetch the weather data and make sure you use queryService to make http calls within the weather service. Also create a directive to display the weather data from the API. You are expected to display at least the current temperature, max and min temperature, humidity and pressure.

The UI design is completely up to you. The code already has a search box and a dropdown to select if "current" or "past" data is required. Show us the best you can do.

**NB:** There are additional inline comments as well.

## Submitting your finished page
You can zip it up and email it to us or fork this and host it on your own GitHub account. We’ll take a look before your interview, but we’ll talk about it with you when you come to meet us too. 

## Assets

You can use gulp to compile your `.scss` or just edit the `.css` file

## Setup

Just run `npm install` to get the project setup and then run gulp to get going.
