import React from 'react';

import Geolocate from '../icons/Geolocate';
import Goose from '../icons/Goose';
import Hatchery from '../icons/Hatchery';
import Building from '../icons/Building';
import ZoomOut from '../icons/ZoomOut';

const HowTo = props => {
  return (
    <div className="content-detail how-to">
      <h2>Southeast Region Office Map</h2>

      <p>Use the map to find a U.S. Fish and Wildlife Service field office, National Wildlife Refuge, or a National Fish Hatchery near you. For more information about a specific office click an office marker on the map.</p>

      <h3>Map Icons</h3>

      <ul>
        <li><Geolocate /> Find the nearest offices</li>
        <li><ZoomOut /> Zoom to full extent</li>
      </ul>

      <h3>Office Types</h3>

      <ul>
        <li><Goose /> National Wildlife Refuge</li>
        <li><Hatchery /> National Fish Hatchery</li>
        <li><Building /> Field Station</li>
      </ul>
    </div>
  );
}

export default HowTo;
