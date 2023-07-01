let map;


async function initMap() {
    // const image.src =
  "https://fortituderanch.com/wp-content/uploads/2022/08/FortitudeRanch-REG-logo-e1660763711267.png";
  // The location of Uluru
  // 37.469448, and the longitude is -105.870018
  const position = { lat:  25.469448, lng: -80.870018 };

  // Request needed libraries.
  //@ts-ignore

  const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4.1,
    center: { lat:  40.5512, lng: -95.6024},
    mapId: "8de410a968150df9",
  });

  // The marker, positioned at Uluru
  
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     icon:"https://fortituderanch.com/wp-content/uploads/2022/08/FortitudeRanch-REG-logo-e1660763711267.png",
//     title: "THISI S THE TITLE"
//   });

var marker1 = new google.maps.Marker({
    position:position,
    icon:"https://i.imgur.com/wLSsMz3.png",
  });

  marker1.setMap(map)

  var marker2 = new google.maps.Marker({
   // 38.5976° N, 80.4549°
    position:{ lat:  38.5976, lng: -80.4549 },
    icon:"https://i.imgur.com/wLSsMz3.png",
  });
  
  marker2.setMap(map);
//38.8375° N, 120.8958° W
  var marker3 = new google.maps.Marker({
    position:{ lat:  38.8375, lng: -120.8958 },
    icon:"https://i.imgur.com/wLSsMz3.png",
  });

  marker3.setMap(map)

  var marker4 = new google.maps.Marker({
    position:{ lat:  32.349998, lng: -95.300003},
    icon:"https://i.imgur.com/wLSsMz3.png",
  });
  
  marker4.setMap(map);
//42.6697° N, 73.7485° W
  var marker5 = new google.maps.Marker({
    position:{ lat:  42.6697, lng: -73.7485 },
    icon:"https://i.imgur.com/wLSsMz3.png",
  });
  
  marker5.setMap(map);
//35.0458° N, 85.3094° W
  var marker6 = new google.maps.Marker({
    position:{ lat:  35.0458, lng: -85.3094 },
    icon:"https://i.imgur.com/wLSsMz3.png",
  });

  marker6.setMap(map)
//46.0547° N, 89.2579° W
  var marker7 = new google.maps.Marker({
    position:{ lat:  46.0547, lng: - 89.2579 },
    icon:"https://i.imgur.com/wLSsMz3.png",
  });
  
  marker7.setMap(map);
}

initMap();
