class Geography {
    getInfo() {
        return {
            "id": "Geography",
            "name": "Geography",
            "blocks": [{
                    "opcode": "Geography",
                    "blockType": "reporter",
                    "text": "Geography",
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    Geography() {
        // Excerpt from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
function geoFindMe() {
    if (!navigator.geolocation){
     console.log("Geolocation is not supported by your browser");
      return "ERROR! BROWSER NOT SUPPORTED";
    }
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      reverseGeocodingWithGoogle(longitude, latitude)
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
}
function reverseGeocodingWithGoogle(latitude, longitude) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?
        latlng=${latitude},${longitude}&key={GOOGLE_MAP_KEY}`)
    .then( res => res.json())
    .then(response => {
        console.log("User's Location Info: ", response)
        return response;
     })
     .catch(status => {
        console.log('Request failed.  Returned status of', status)
        return status;
     })
  }
    }


