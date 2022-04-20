
# Run Backend Server

### `nodemon app.js` command is used to run our backend server


## I create 2 RestAPI 

[http://localhost:8080/adduser](http://localhost:8080/adduser) API for add new user  
[http://localhost:8080/userlist](http://localhost:8080/userlist) API for list passenger

## 1) [http://localhost:8080/adduser](http://localhost:8080/adduser) Rest API

We use POST method in this API. In this rest API we send name,trips,airline id to passenger API and Passenger API automatically pick airline details through airline id and then we get response in json format like this 
```
response : {
  "_id": "625fca37b168d42be6302fc4",
  "name": "kamal singh rawat",
  "trips": 233,
  "airline": [
    {
      "id": 10,
      "name": "Swiss International Air Lines",
      "country": "Switzerland",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Swiss_International_Air_Lines_Logo_2011.svg/200px-Swiss_International_Air_Lines_Logo_2011.svg.png",
      "slogan": "Made of Switzerland. The Airline of Switzerland",
      "head_quaters": "EuroAirport Basel Mulhouse Freiburg near Basel, Switzerland",
      "website": "www.swiss.com",
      "established": "2002"
    }
  ],
  "__v": 0
}
```

## 2) [http://localhost:8080/userlist](http://localhost:8080/userlist) Rest API

We use GET method in this API. In this rest API we use 2 query parameters "page" and "size". In the page we set the page number to retrieve data of that page number and size parameter we declare the size of data we want to retrieve.

After using query parameters our api look like this http://localhost:8080/userlist?page=0&size=10
