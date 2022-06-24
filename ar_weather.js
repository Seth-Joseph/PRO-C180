let coordinates = {}

$(document).ready(function(){
    getCoordinates()
    getWeather()

})

function getCoordinates(){
    var searchParameters = new URLSearchParams(window.location.search)
    
    if (searchParameters.has('source') && searchParameters.has('destination')) {
        var source = searchParameters.get('source')
        var destination = searchParameters.get('destination')

        coordinates.source_lat = source.split(';')[0]
        coordinates.source_lon = source.split(';')[1]

        coordinates.destination_lat = destination.split(';')[0]
        coordinates.destination_lon = destination.split(';')[1]
    } else {
        alert('please select coordinates and try again.')
        window.history.back()
    }
}

function getWeather(){
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destination_lat}&lon=${coordinates.destination_lon}&appid=94212e971d0ca977303f8ae892224bbd`,
        type: "get",
        success: function (response) {
            let name = response.name
            let weather = response.weather[0].main
            $("#scene_container").append(
                `
                    <a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]}; longitude: ${steps[i].maneuver.location[0]};">
                        <a-entity>
                            <a-text height="50" value="Weather forcast is ${weather} at ${name}"></a-text>
                        </a-entity>
                    </a-entity>
                `
            )
        }
    })
}
