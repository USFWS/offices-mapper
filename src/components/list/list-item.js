import React from 'react';

import Goose from '../icons/Goose';
import Hatchery from '../icons/Hatchery';
import Building from '../icons/Building';

const ListItem = props => {

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
    <li>
      { getOfficeIcon(props.office.properties.type) }
      <div className='office-info'>
        <h3>{ props.office.properties.name }</h3>
        <address>
          { props.office.properties.address } <br />
          { props.office.properties.city }, { props.office.properties.state } <br/>
        </address>
        <p>{props.office.properties.narrative}</p>
      </div>
    </li>
  );
}

export default ListItem;
