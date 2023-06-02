function initMap() {
   
    const posicion = { lat: -34.793682 , lng: -58.3105750  };
    
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: posicion,
    });
    marker = new google.maps.Marker({
        position: posicion,
        map ,
        title: "Mi casa"
  
    })
    marker = new google.maps.Marker(
        {
        position: {lat: -38.0055,lng:-57.5426},
        map ,
        title: "Mi Casa"
  }),
  marker = new google.maps.Marker(
 {position: {lat: -34.908904,lng:-57.932931},
  map ,
  title: "Museo de Ciencias Naturales de la Plata"}
  )}
