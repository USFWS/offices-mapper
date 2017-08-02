import React from 'react';

const LayerToggle = ({ layer, activateBasemap }) => {
  return (
    <li>
      <button onClick={() => activateBasemap(layer.name)}>{layer.name}</button>
    </li>
  )
}

export default LayerToggle;
