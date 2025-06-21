// public/js/map.js
maplibregl.accessToken = ''; // Not needed unless you use a token-based tile provider

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/streets/style.json?key=6VEx0uTqIUmFNzrWZSD5', // Basic open-source style
  center: coordinates, 
  zoom: 10
});

new maplibregl.Marker()
  .setLngLat(coordinates)
  .addTo(map);

map.addControl(new maplibregl.NavigationControl());


  