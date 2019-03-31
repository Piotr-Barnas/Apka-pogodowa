//var i=Math.floor(Math.random() * 12);
//var weathersList = ['sunrise', 'cloudySunset', 'sunset', 'windySunset', 'rain', 'snowfall', 'thunderstorm', 'cloudy', 'cloudyNight', 'cloudy & windy', 'night', 'windy & sunny'];
var weather = 'cloudy';
var backgroundVideo = document.getElementById('bg_src');
if (weather== 'sunrise') {
    backgroundVideo.setAttribute('src', 'video/sunrise.mp4');
} else if (weather == 'sunset') {
    backgroundVideo.setAttribute('src', 'video/sunset.mp4');
} else if (weather == 'cloudySunset') {
    backgroundVideo.setAttribute('src', 'video/cloudySunset.mp4');
} else if (weather == 'windySunset') {
    backgroundVideo.setAttribute('src', 'video/windySunset.mp4');
} else if (weather == 'rain') {
    backgroundVideo.setAttribute('src', 'video/rain.mp4');
} else if (weather == 'snowfall') {
    backgroundVideo.setAttribute('src', 'video/snowfall.mp4');
} else if (weather == 'thunderstorm') {
    backgroundVideo.setAttribute('src', 'video/thunderstorm.mp4');
} else if (weather == 'cloudy') {
    backgroundVideo.setAttribute('src', 'video/cloudy.mp4');
} else if (weather == 'cloudyNight') {
    backgroundVideo.setAttribute('src', 'video/cloudyNight.mp4');
} else if (weather == 'cloudy & windy') {
    backgroundVideo.setAttribute('src', 'video/cloudy & windy.mp4');
} else if (weather == 'night') {
    backgroundVideo.setAttribute('src', 'video/night.mp4');
} else if (weather == 'windy & sunny') {
    backgroundVideo.setAttribute('src', 'video/windy & sunny.mp4');
}

function filtrowanie() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('wyszukiwarka');
    filter = input.value.toUpperCase();
    ul = document.getElementById("pasekMiast");
    li = ul.getElementsByTagName('li');
    console.log(li[i]);
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0 && filter != '') {
            li[i].style.display = "initial";
        } else{
            li[i].style.display = "none";
        }
    }
}