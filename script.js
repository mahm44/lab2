mapboxgl.accessToken =  'pk.eyJ1IjoibWFobSIsImEiOiJjbHJiaTVkanowb3lzMndwcnYwN3ZleGJkIn0.6g4SedBzopOipcNKBKj3lg';

const map = new mapboxgl.Map ({
    container: 'my-map',
    style: 'mapbox://styles/mahm/cls29mb1u01qn01o852ize7dt',
    center: [-85, 55], // CHNAGE COORDS AND ZOOM 
    zoom: 4
});

map.on('load', () => {
    // add data soruce from geojson
    map.addSource('airports-data', {
        type: 'geojson',
        data: 'airportPoints.geojson' // ADD UPDATED AIRPORTS GEOJSON 
        });

    map.addLayer({
        'id': 'airports-points',
        'type': 'circle',
        'source': 'airports-data',
        'paint': {
            'circle-radius': 10,
            'circle-color': '#007cbf'
        }
    });

    map.addSource('airports-shapes-data', { // UPDATE -- Create your own source ID
        'type': 'vector',
        'url': '' // ADD NEW TOURIST SPOT VECTOR TILESET 
        });
    map.addLayer({
        'id': 'tracts', // Create your own layer ID
        'type': 'fill', // Note this is different to point data
        'source': '', // Must match source ID from addSource Method
        'paint': {
            'fill-color': '#888888', // Test alternative colours and style properties
            'fill-opacity': 0.4,
            'fill-outline-color': 'black'
        },
        'source-layer': '' // UPDATE -- Tileset NAME (diff to ID), get this from mapbox
       // tileset page
    },
        'airports-data' // Drawing order - places layer below points
        // Here the addlayer method takes 2 arguments (the layer as an object and a
        //string for another layer's name). If the other layer already exists, the new layer
        //will be drawn before that one
    );
})