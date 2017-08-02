import React from 'react';
import { getNearestOffices } from '../../api/OfficesAPI';

const sortByDistance = (a, b) => a.properties.nearest - b.properties.nearest;

const NearestOffices = props => {
  const nearest = getNearestOffices(props.offices).sort(sortByDistance);
  return (
    <ul className='nearest-list'>
      {
        nearest.map((o, i) => {
          return (
            <li key={i} className='nearest-item'>
              <button onClick={() => props.selectOffice(o)}>
                {o.properties.name} ({o.properties.nearest.toFixed(2)} miles)
              </button>
            </li>
          );
        })
      }
    </ul>
  )
}

export default NearestOffices;
