import React from 'react';
import { Marker } from 'react-mapbox-gl';
import Goose from '../icons/Goose';
import Hatchery from '../icons/Hatchery';
import Building from '../icons/Building';

const OfficeMarker = ({ feature, coordinates, styles, selectOffice }) => {

  const getOfficeIcon = type => {
    switch (type) {
      case 'National Wildlife Refuge':
        return <Goose />;
      case 'Ecological Services Field Office':
        return <Building />;
      case 'National Fish Hatchery':
        return <Hatchery />;
      default:
        return <Building />;
    }
  }

  return (
    <Marker coordinates={coordinates} style={styles} onClick={(e) => selectOffice(feature)}>
      {getOfficeIcon(feature.properties.type)}
    </Marker>
  );
};

export default OfficeMarker;
