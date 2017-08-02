import React from 'react';
import { Cluster, Marker, Popup } from 'react-mapbox-gl';
import OfficeMarker from './OfficeMarker';

const MarkerCluster = ({ features, selectOffice, selectedOffice }) => {

  const clusterStyles = {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#51D5A0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: '2px solid #56C498',
    pointerEvents: 'none'
  };

  const markerStyles = {
    width: 60,
    height: 60
  };

  const clusterMarker = (coordinates, count) => (
    <Marker
      key={coordinates.toString()}
      coordinates={coordinates}
      style={clusterStyles}>
      {count}
    </Marker>
  );

  const displayItem = ({properties}) => properties.display;

  return (
    <div>
      <Cluster ClusterMarkerFactory={clusterMarker}>
        {
          features
            .filter(displayItem)
            .map((feature, key) => (
            <OfficeMarker
              selectOffice={selectOffice}
              key={key}
              styles={markerStyles}
              coordinates={feature.geometry.coordinates}
              feature={feature}
           />
          ))
        }
      </Cluster>
      {
        selectedOffice && (
          <Popup
            position='top'
            key={selectedOffice.properties.name}
            offset={[0, -45]}
            coordinates={selectedOffice.geometry.coordinates}
          >
            {selectedOffice.properties.name}
          </Popup>
        )
      }
    </div>
  );
}

export default MarkerCluster;
