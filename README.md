# Vopak-project
In this project i have created a  RESTful API, that provides the current temperature in Covilha (Portugal), and 
the average temperature in june in Sfax (Tunisia). I take the data from https://weatherstack.com/. This website
provides the real-time temperature in Covilha. Through the API I save these temperatures and the respective timestamps in MongoDB.
For the average temperature in Sfax, my subscription does not support the historical avg temperature, for this reason
i take this data from here https://www.holiday-weather.com/sfax/averages/.
For tests i used Postman, i have tried to do GET, POST and DELETE requests.
