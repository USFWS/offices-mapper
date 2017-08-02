import React from 'react';

const AutocompleteResult = ({ office, onOfficeClick }) => {
  return (
    <li>
      <button onClick={() => onOfficeClick(office)}>{office.properties.name}</button>
    </li>
  )
}

export default AutocompleteResult;
