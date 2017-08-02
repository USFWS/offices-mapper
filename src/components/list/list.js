import React from 'react';
import ListItem from './list-item';

const List = props => {
  return (
    <ul className='offices-list'>
      { props.offices.map((o, i) => <ListItem key={i} office={o} />) }
    </ul>
  )
}

export default List;
