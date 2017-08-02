import officesData from '../api/offices';

const initialState = {
  offices: officesData,
  query: '',
  sidebar: 'how-to',
  autocomplete: {
    showResults: false
  },
  map: {
    basemaps: [
      {
        name: 'Streets',
        url: 'mapbox://styles/mapbox/streets-v9',
        active: true
      },
      {
        name: 'Satellite',
        url: 'mapbox://styles/mapbox/satellite-v9',
        active: false
      },
      {
        name: 'Bright',
        url: 'mapbox://styles/mapbox/bright-v9',
        active: false
      },
      {
        name: 'Light',
        url: 'mapbox://styles/mapbox/light-v9',
        active: false
      }
    ]
  }
};


export default initialState;
