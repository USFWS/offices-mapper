import React from 'react';
import LayerToggle from './LayerToggle';

// What does the map need to know??
//  1.  Basemap - one of several should be "active" - Need to define a default
//  2.  Overlays - which of several should be displayed?  - Need to define sensible defaults
//  3.  Center - Where should the map begin? - We can set this to geojson layer's bounds
//  4.  Offices - Displayed as clustered markers from filtered Geojson data

const LayerSwitcher = ({ basemaps, activateBasemap }) => {
  return (
    <ul className="layer-switcher">
      {basemaps.map((b, i) => {
        return <LayerToggle layer={b} key={i} activateBasemap={activateBasemap} />
      })}
    </ul>
  )
}

export default LayerSwitcher;
