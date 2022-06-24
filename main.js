var longitude, latitude, destination

$(function(){
    $("#weather-button").click(function(){
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})

function initgeoLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success)
    } else {
        alert('Browser does not support')
    }
}

$(document).ready(function(){
    initgeoLocation()
})

function success(position) {
    latitude = position.coords.latitude
    longitude = position.coords.longitude

    mapboxgl.accessToken = 'pk.eyJ1IjoidmlzaGFraGF2ZXJtYSIsImEiOiJja3kydG5qbGswb3dlMm9xdDl1eXR2aWxnIn0._GT9CvIkss6ldiBdOrK4NA'

    var latitude = 20.5937;
    var longitude = 78.9629;

    var map = new mapboxgl.Map({
        container: 'map',
        zoom: 4, //0-22
        style: 'mapbox://styles/mapbox/navigation-day-v1',
        center: [longitude,latitude]
    });

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        }).on('result',function(e){
            destination = e.result.center
        }),
        'top-left'
    );

    var img1 = document.querySelector("#tajmahal");

    var marker1 = new mapboxgl.Marker({
        element: img1
    })
    .setLngLat([78.0421,27.1751])
    .addTo(map);

    var img2 = document.querySelector("#qutabminar");

    var marker2 = new mapboxgl.Marker({
        element: img2
    })
    .setLngLat([77.1855,28.5245])
    .addTo(map);

    var img3 = document.querySelector("#gatewayofindia");

    var marker3 = new mapboxgl.Marker({
        element: img3
    })
    .setLngLat([72.8347,18.9220])
    .addTo(map);

    var img3 = document.querySelector("#mysorepalace");

    var marker3 = new mapboxgl.Marker({
        element: img3
    })
    .setLngLat([76.6552,12.3052])
    .addTo(map);

    var img4 = document.querySelector("#charminar");

    var marker4 = new mapboxgl.Marker({
        element: img4
    })
    .setLngLat([78.4747,17.3616])
    .addTo(map);

    var img5 = document.querySelector("#redfort");

    var marker5 = new mapboxgl.Marker({
        element: img5
    })
    .setLngLat([77.2410,28.6562])
    .addTo(map);

    var img6 = document.querySelector("#hawamahal");

    var marker6 = new mapboxgl.Marker({
        element: img6
    })
    .setLngLat([75.8267,26.9239])
    .addTo(map);

    
    
}