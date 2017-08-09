import React from 'react';

import FindNearestOffice from './FindNearestOffice';
import Goose from '../icons/Goose';
import Hatchery from '../icons/Hatchery';
import Building from '../icons/Building';

import { getNearestOffices } from '../../api/OfficesAPI';

const sortByDistance = (a, b) => a.properties.nearest - b.properties.nearest;

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

const NearestOffices = props => {
  const nearest = getNearestOffices(props.offices).sort(sortByDistance);

  return (
    <ul className='nearest-list'>
      { !nearest.length ? <FindNearestOffice selectNearestOffices={props.selectNearestOffices} offices={props.offices} /> : '' }
      {
        nearest.map((o, i) => {
          return (
            <li key={i} className='nearest-item'>
              <button onClick={() => props.selectOffice(o)}>
                <span className='icon-and-mileage'>
                  {getOfficeIcon(o.properties.type)}
                  {o.properties.nearest.toFixed(0)} miles
                </span>
                <span className='nearest-item-name'>{o.properties.name}</span>
              </button>
            </li>
          );
        })
      }
    </ul>
  )
}

export default NearestOffices;
