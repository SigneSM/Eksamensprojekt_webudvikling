
// L = Leaflet-variablen
var map = L.map('KortKobenhavn').setView([55.6761, 12.4683], 9); // Koordinater

// Load og vis tile layers fra OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Markers, koordinater
var marker1 = L.marker([55.673, 12.3]).addTo(map);
var marker2 = L.marker([55.691288, 12.565317]).addTo(map);
var marker3 = L.marker([55.667634, 12.553248]).addTo(map);
var marker3 = L.marker([55.635013, 12.492559]).addTo(map);
var marker4 = L.marker([55.624635, 12.425327]).addTo(map);
var marker5 = L.marker([55.659768, 12.496325]).addTo(map);
var marker6 = L.marker([55.643569, 12.094023]).addTo(map);
var marker7 = L.marker([55.649560, 12.301964]).addTo(map);
var marker8 = L.marker([55.658372, 12.608095]).addTo(map);
var marker9 = L.marker([55.442383, 11.793405]).addTo(map);
var marker10 = L.marker([55.707706, 12.562371]).addTo(map);


// Pop-ups på markers
//marker.bindPopup("<b>Hello!</b><br>This is a marker in London.").openPopup();
marker1.bindPopup("GreenClean");
marker2.bindPopup("Tamas");
marker3.bindPopup("Eco cleaning");
marker4.bindPopup("ECOOK");
marker5.bindPopup("Pea Health");
marker6.bindPopup("Wellbeing");
marker7.bindPopup("GoCoEco");
marker8.bindPopup("GreenClean");
marker9.bindPopup("Home");
marker10.bindPopup("KL Vask");