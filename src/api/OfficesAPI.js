import mapboxgl from 'mapbox-gl';
import distance from '@turf/distance';
import sphereKnn from '../vendor/sphere-knn';

const createPoint = coords => {
  return {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": coords
    }
  }
}

const random = (array) => array[Math.floor(Math.random() * array.length)];

export const getOffice = (offices, name) => offices.find(office => name === office.properties.name);

export const getCurrentOffice = offices => offices.find(office => office.properties.selected);

export const selectOffice = (offices, name) => offices.map(o => {
  if (o.properties.name === name)
    return {...o, properties: {...o.properties, selected: true} };
  else
    return {...o,  properties: {...o.properties, selected: false} };
});

export const randomOffice = (offices) => random(offices);

// Input: Array of features
// Output: Array of features with display: true
export const getVisibleFeatures = offices => offices.filter(f => f.properties.display);

// Input: Array of Features
// Output: Bounding box array
export const getBounds = offices => {
  return offices.reduce((bounds, feat) => {
    return bounds.extend(feat.geometry.coordinates);
  }, new mapboxgl.LngLatBounds()).toArray();
}

// Search offices by name, narrative, city, state, and type
// Input: Array of features
// Output: Array of features with toggled display property
export const search = (offices, query) => {
  const regex = new RegExp(query, 'gi');

  const filtered = offices.map(office => {
    const props = office.properties;
    const isName = regex.test(props.name);
    const isType = regex.test(props.type);
    const isCity = regex.test(props.city);
    const isState = regex.test(props.state);

    if ( isName || isType || isCity || isState )
      return {...office, properties: {...props, display: true}};
    else
      return {...office, properties: {...props, display: false}};
  });

  return filtered;
}

const mapOfficesToLookup = offices => {
  return offices.map((o, i) => ({
    name: o.properties.name,
    lon: o.geometry.coordinates[0],
    lat: o.geometry.coordinates[1]
  }));
}

const mapNearestOfficesToArray = (nearest, position) => nearest.map(office => {
  const fromPoint = createPoint([office.lon, office.lat]);
  const toPoint = createPoint([position.coords.longitude, position.coords.latitude]);
  return {
    name: office.name,
    distance: distance(fromPoint, toPoint, 'miles')
  }
});

// Searches offices and returns n closest offices to reference location
export const findNearest = (offices, position, maxResults = 10) => {
  const lookup = sphereKnn(mapOfficesToLookup(offices));
  const nearestOffices = lookup(position.coords.latitude, position.coords.longitude, maxResults);
  return mapNearestOfficesToArray(nearestOffices, position);
}

export const selectNearest = (offices, nearest) => offices.map(o => {
  const nearestOffice = nearest.find(n => n.name === o.properties.name);
  if (nearestOffice)
    return {...o, properties: {...o.properties, nearest: nearestOffice.distance, display: true} };
  else
    return {...o, properties: {...o.properties, display: false, nearest: false}};
});

export const getNearestOffices = offices => offices.filter(o => o.properties.nearest);
