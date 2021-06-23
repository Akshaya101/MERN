//api key - 861f22e9674ed20dcc27263903de294c

//storing the url of the site where we get API from
const API = '861f22e9674ed20dcc27263903de294c';
const btn = document.getElementById('btn');
const icon = document.getElementById('btn-icon');

btn.addEventListener('click',function(){
    let cityName = document.getElementById('cityName').value;
    // let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+API+'&units=';
    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+API+'&units=metric'
   
    console.log(requestURL);

    //used to create a request object
    let request = new XMLHttpRequest();
    //we need to open the request using open() method
    request.open('GET',requestURL,true);
    //we wait for the response from the server and deal with it
    request.onload = function(){
        if(request.status>=200 && request.status<400){
            var weatherData = JSON.parse(request.responseText);
            console.log(weatherData);
            var description = weatherData.weather[0].description;
            document.getElementById('weather-description').innerHTML = description;
            console.log(description);
            var temp = weatherData.main.temp;
            document.getElementById('temperature').innerHTML = temp+'<span>&#8451;</span>';
            var icon = weatherData.weather[0].icon+'.png';
            document.getElementById('icon').src = "https://openweathermap.org/img/w/"+icon;
        }
        else{
            alert('Enter an existing city');
            console.log('error in code');
        }
    };
    request.onerror = function(){
        console.log('connection error');
    }
    request.send();
});

icon.addEventListener('click',function(){
    let cityName = document.getElementById('cityName').value;
    // let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+API+'&units=';
    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+API+'&units=metric'
   
    console.log(requestURL);

    //used to create a request object
    let request = new XMLHttpRequest();
    //we need to open the request using open() method
    request.open('GET',requestURL,true);
    //we wait for the response from the server and deal with it
    request.onload = function(){
        if(request.status>=200 && request.status<400){
            var weatherData = JSON.parse(request.responseText);
            console.log(weatherData);
            var description = weatherData.weather[0].description;
            document.getElementById('weather-description').innerHTML = description;
            console.log(description);
            var temp = weatherData.main.temp;
            document.getElementById('temperature').innerHTML = temp+'<span>&#8451;</span>';
            var icon = weatherData.weather[0].icon+'.png';
            document.getElementById('icon').src = "https://openweathermap.org/img/w/"+icon;
        }
        else{
            alert('Enter an existing city');
            console.log('error in code');
        }
    };
    request.onerror = function(){
        console.log('connection error');
    }
    request.send();
});




