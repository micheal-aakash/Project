var map = L.map('map').setView([8.7832, 78.1348], 5); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var locations = [
    { name: "Tuticorin", coords: [8.7832, 78.1348], url: "tuticorin.html" },
    { name: "Chennai", coords: [13.0827, 80.2707], url: "chennai.html" },
    { name: "Kodaikanal", coords: [10.2381, 77.4892], url: "kodaikanal.html" },
    { name: "Ooty", coords: [11.4064, 76.6932], url: "ooty.html" }
];

locations.forEach(function(location) {
    L.marker(location.coords).addTo(map)
        .bindPopup('<b>' + location.name + '</b><br><a href="' + location.url + '">View Details</a>');
});
