let map = L.map('mapid').setView([25.310065, -80.123993], 8.00);

L.tileLayer('https://api.mapbox.com/styles/v1/cos1999/ckif8d10044b319t00v9ezk7u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29zMTk5OSIsImEiOiJja2k5YzZob24wZWlrMnlwZDIwZHA2eW80In0.ZFj69ISkxZjk6hPTJsYA-w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);



let polygon1 = L.polygon([
    [25.740666, -80.209533],
    [25.536246, -80.312496],
    [25.391587, -80.309305],
    [25.376915, -80.256989],
    [25.714246, -80.170220]
]).addTo(map);

let polygon2 = L.polygon([
    [24.564296, -81.308889],
    [24.844443, -81.367975],
    [24.615361, -82.010457],
    [24.485241, -82.022793]
]).addTo(map);

let polygon3 = L.polygon([
    [25.722227, -80.037506],
    [25.729371, -79.612679],
    [24.529135, -79.734986],
    [24.800541, -80.642536],
    [25.241878, -80.171860]
]).addTo(map);

polygon1.bindPopup("<h3> Biscayne Bay </h3><p> Located between Homestead and South Miami, Biscayne bay offers refuge to a variety of marine flora and fauna. <b> <a href='biscayne-bay.html'>Explore</a> </b></p>");

polygon2.bindPopup("<h3> Key West area </h3><p> Home to a unique and diverse ecosystem. Many species of marine life found here are exclusive to Key West and cannot be found elsewhere. <b> <a href='keywest.html'>Explore</a> </b> </p>");

polygon3.bindPopup("<h3> Open Ocean </h3><p> Located about 5 miles off the shore of Florida to approximately 30-40 miles into the open ocean, this area is filled with larger species of marine life that thrive in open seas. Fishing in this area is very popular. <b> <a href='openocean.html'>Explore</a> </b> </p>");
