var i=Math.floor(Math.random() * 12);
var weathersList = ['sunrise', 'sunset', 'rain', 'snowfall', 'thunderstorm', 'cloudy', 'cloudy & windy', 'night', 'wind'];
var weather = 'sunrise';
var tomorrowWeather = 'rain';
var cityList = [];
var backgroundVideo = document.getElementById('bg_src');
var icon = document.getElementsByClassName('icon');
console.log(icon[0])
if (weather == 'sunrise') {
    backgroundVideo.setAttribute('src', 'video/sunrise.mp4');
    icon[0].src = 'img/sunrise.svg';
} else if (weather == 'sunset') {
    backgroundVideo.setAttribute('src', 'video/sunset.mp4');
    icon[0].src = 'img/sunset.svg';
} else if (weather == 'rain') {
    backgroundVideo.setAttribute('src', 'video/rain.mp4');
    icon[0].src = 'img/raining.svg';
} else if (weather == 'snowfall') {
    backgroundVideo.setAttribute('src', 'video/snowfall.mp4');
    icon[0].src = 'img/snowflake.svg';
} else if (weather == 'thunderstorm') {
    backgroundVideo.setAttribute('src', 'video/thunderstorm.mp4');
    icon[0].src = 'img/bolt.svg';
} else if (weather == 'cloudy') {
    backgroundVideo.setAttribute('src', 'video/cloudy.mp4');
    icon[0].src = 'img/clouds(1).svg';
} else if (weather == 'cloudyNight') {
    backgroundVideo.setAttribute('src', 'video/cloudyNight.mp4');
} else if (weather == 'night') {
    backgroundVideo.setAttribute('src', 'video/night.mp4');
    icon[0].src = 'img/moon.svg';
} else if (weather == 'wind') {
    backgroundVideo.setAttribute('src', 'video/windy & sunny.mp4');
    icon[0].src = 'img/wind.svg';
}

if (tomorrowWeather == 'sunrise') {
    icon[1].src = 'img/sunrise.svg';
} else if (tomorrowWeather == 'sunset') {
    icon[1].src = 'img/sunset.svg';
} else if (tomorrowWeather == 'rain') {
    icon[1].src = 'img/raining.svg';
} else if (tomorrowWeather == 'snowfall') {
    icon[1].src = 'img/snowflake.svg';
} else if (tomorrowWeather == 'thunderstorm') {
    icon[1].src = 'img/bolt.svg';
} else if (tomorrowWeather == 'cloudy') {
    icon[1].src = 'img/clouds(1).svg';
} else if (tomorrowWeather == 'wind') {
    backgroundVideo.setAttribute('src', 'video/windy & sunny.mp4');
    icon[1].src = 'img/wind.svg';
}

$.ajax({
    dataType: "json",
    url: "city.list.json",
    mimeType: "application/json",
    success: function (result) {
        $.each(result, function (i, obj) {
            cityList[i] = obj.name
        });
    }
});

function filtrowanie() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('wyszukiwarka');
    filter = input.value.toUpperCase();
    li = ul.getElementsByTagName('li');
    ul = document.getElementById("pasekMiast");
    for (i = 0; i < data.length; i++) {
        txtValue = li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0 && filter != '') {
            li[i].style.display = "initial";
        } else{
            li[i].style.display = "none";
        }
    }
}


