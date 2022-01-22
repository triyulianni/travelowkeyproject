//list of attraction names
//console.log("in map.js")
let list = document.getElementsByClassName("title")
// console.log(list)
let attractions_names = []

for(let i = 0; i< list.length; i++){
    attractions_names.push(list[i].innerText)
}
// console.log(attractions_names)

let mapProp, infoWindow;
// all markers
var gmarkers = []

// user location coordinates
var userLocation = { lat: 0, lng: 0 }

// zoom into the markers
// function zoomOnMarker(markers, map) {
//     for (var i = 0; i < markers.length; i++) {
//         markers[i].addListener('click', function () {
//             map.setZoom(17);
//             map.setCenter(this.getPosition());
//         });
//     }
// }


// creates a map 
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(1.3521, 103.8198), // singapore coordinates
        zoom: 12,


    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var bounds = new google.maps.LatLngBounds();

    // array of attractions information
    var attractionsInfo = [
        // zoo
        ['Singapore Zoo', 1.4048104, 103.7905117, 'images/attractions/zoologo.png'],
        ['S.E.A Aquarium', 1.2583246, 103.8204468, 'images/attractions/aquariumlogo.png'],
        ['River Safari', 1.4019786, 103.7915978, 'images/attractions/riversafarilogo.png'],
        ['Night Safari', 1.4022371, 103.7889666, 'images/attractions/nightsafarilogo.png'],

        //amusement_park
        ['Universal Studio Singapore', 1.2540, 103.8238, 'images/attractions/amusement-park.png'],
        ['Adventure Cove Waterpark', 1.2588, 103.8187, 'images/attractions/advcovelogo.png'],
        ['Hydrodash', 1.2497, 103.8216, 'images/attractions/hydrodashlogo.png'],
        ['Snow city', 1.3350731, 103.7351191, 'images/attractions/snowcitylogo.png'],

        // museums
        ['ArtScience Museum', 1.2860422, 103.8592603, 'images/attractions/artsciencemuseumlogo.png'],
        ['National Gallery', 1.2902642, 103.8513984, 'images/attractions/museum.png'],
        ['Gillman Barracks', 1.2783219, 103.8042837, 'images/attractions/gilmanbarrackslogo.png'],
        ['Madame Tussauds', 1.2540112, 103.8176429, 'images/attractions/madametussaudslogo.png'],

        // scenic places
        ['Singapore Flyer', 1.2894104, 103.8631253, 'images/attractions/sgflyerlogo.png'],
        ['Marina Bay Sands', 1.2847, 103.8610, 'images/attractions/mbslogo.png'],
        ['Gardens By the Bay', 1.2816311, 103.8636826, 'images/attractions/gardensbythebaylogo.png'],
        ['Botanic Gardens', 1.3146321, 103.8156151, 'images/attractions/botanicgardenlogo.png'],

    ]

    for (var i = 0; i < attractionsInfo.length; i++) {
        var name = attractionsInfo[i][0];
        var latitude = attractionsInfo[i][1];
        var longtitude = attractionsInfo[i][2];
        var icon_img = attractionsInfo[i][3];

        const contentStr= `
          <div>
            <h5>${name}</h5>
            <h6>
              <a href='https://www.google.com/maps/search/?api=1&query=${latitude},${longtitude}' target="_blank">Get Directions</a>
            </h6>
          </div>
        `
        
        // create a info window to display description of attractions
        var infoWindow = new google.maps.InfoWindow({ content: contentStr });

        //create a marker for attractions
        let marker = new google.maps.Marker({
            position: { lat: latitude, lng: longtitude },
            map: map,
            icon: { url: icon_img, scaledSize: new google.maps.Size(50, 50) },
            info: contentStr
        });


        // open info window when clicked
        google.maps.event.addListener(marker, 'click', function () {

            infoWindow.setContent(this.info);
            infoWindow.open(map, this);

        })

        // zoom in to marker when clicked
        google.maps.event.addListener(marker,'click',function() {
          map.setZoom(15);
          map.setCenter(marker.getPosition());
          // console.log(marker.getPosition())
        }); 

        bounds.extend(marker.getPosition());
        gmarkers.push(marker); 
    }


    // restrict minimum and maximum zoom
    var opt = { minZoom: 12, maxZoom: 22 };
    map.setOptions(opt);

    
    // 
  const locationButton = document.createElement("button");

  locationButton.textContent = "Where am I?";
  locationButton.classList.add("custom-map-control-button");
  
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  let button_style ="background: none padding-box rgb(255, 255, 255); display: table-cell; border: 0px; margin: 0px; padding: 0px 23px; text-transform: none; appearance: none; position: relative; cursor: pointer; user-select: none; direction: ltr; overflow: hidden; text-align: center; height: 40px; vertical-align: middle; color: rgb(86, 86, 86); font-family: Roboto, Arial, sans-serif; font-size: 18px; border-bottom-right-radius: 2px; border-top-right-radius: 2px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; min-width: 66px;"
  locationButton.setAttribute("style", button_style )
  

  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // info window for user's location
          var infoWindowUser = new google.maps.InfoWindow({ content: `<h4> Here I am! </h4>
          <a href="">View nearest bus stand info</a>` });

          var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: "My Location",
            info: ` 
            <h4> Here I am! </h4>`,
            animation: google.maps.Animation.DROP,

        });
        marker.addListener("click", toggleBounce);

        //   infoWindowUser.open(map)
          marker.setMap(map);
          map.setCenter(pos)

          function toggleBounce() {
            infoWindow.setContent(this.info);
            infoWindow.open(map, this);
            
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          }

        },
        () => {
          handleLocationError(true, infoWindowUser, map.getCenter());
        }
      );
    } else {
      // if browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });

}

// Displays error message if geolocation fail
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
