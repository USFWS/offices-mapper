import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { getBounds, getVisibleFeatures } from '../../api/OfficesAPI';

import LayerSwitcher from './LayerSwitcher';
import MarkerCluster from './MarkerCluster';
import Autocomplete from '../autocomplete/Autocomplete';
import Sidecar from '../sidecar/Sidecar';
import Sidebar from '../sidebar/Sidebar';

// What does the map need to know??
//  1.  Basemap - one of several should be "active" - Need to define a default
//  2.  Overlays - which of several should be displayed?  - Need to define sensible defaults
//  3.  Center - Where should the map begin? - We can set this to geojson layer's bounds
//  4.  Offices - Displayed as clustered markers from filtered Geojson data

const MapBox = new ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoicmhld2l0dCIsImEiOiJjajVoN3JkMWUwenFrMzZvMWU5cmVpMGh1In0.Nu0nzA2BuxZchxdjPrWwiw",
  maxZoom: 12
});

const Map = props => {
  const visibleFeatures = getVisibleFeatures(props.offices);
  const fitBoundsOptions = {
    padding: {
      left: 350,
      right: 75,
      top: 50,
      bottom: 50
    }
  };

  return (
    <div>
      <Sidecar />
      <Sidebar />
      <MapBox style={props.activeBasemap}
        fitBounds={visibleFeatures.length ? getBounds(visibleFeatures) : getBounds(props.offices)}
        fitBoundsOptions={fitBoundsOptions}
      >
        <Autocomplete />
        <LayerSwitcher basemaps={props.basemaps} activateBasemap={props.activateBasemap}/>
        <MarkerCluster features={visibleFeatures} selectOffice={props.selectOffice} />
      </MapBox>
    </div>
  )
}

export default Map;
