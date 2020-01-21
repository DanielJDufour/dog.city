import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import Stamen from 'ol/source/Stamen';

new Map({
  target: 'map',
  view: new View({
    center: fromLonLat([71.0690, 42.3690]),
    zoom: 4 
  }),
  layers: [
    new TileLayer({
      source: new Stamen({
        layer: 'watercolor'
      })
    }),
    new TileLayer({
      source: new Stamen({
        layer: 'toner-labels'
      })
    })
  ]
});

console.log('hey');

    

/*
map.addLayer(layer);

    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

new Map({
  target: 'map',
  layers: [

    var basemap = new ol.Map({
      target: 'map'
      layers: [],
      view: new ol.View({
        
      })
    })

    */