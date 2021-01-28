/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/


const button = document.getElementById('button')

button.addEventListener('click', () =>{
    const geolocalizacion = navigator.geolocation

    geolocalizacion.getCurrentPosition(getPosition,error,options)

})

const options = {
    enableHighAccuracy : true,
    timeout : 5000,
    maximumAge : 0
}

const getPosition = (position) =>{
    console.log(position)

}

const error = (error) => console.log(error)
