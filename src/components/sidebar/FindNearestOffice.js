import React from 'react';
import { findNearest } from '../../api/OfficesAPI';

import Geolocate from '../icons/Geolocate';

class FindNearestOffice extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: false };
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
  }

  getCurrentPosition() {
    this.setState({ loading: true });
    navigator.geolocation.getCurrentPosition(position => {
      const nearestOffices = findNearest(this.props.offices, position);
      this.setState({ loading: false });
      this.props.selectNearestOffices(nearestOffices);
    });
  }

  render() {
    return (
      <li>
        <button onClick={this.getCurrentPosition} className='nearest-offices-search-button'>
          <Geolocate loading={ this.state.loading ? 'loading' : ''} />
          <span>Find nearby offices</span>
        </button>
      </li>
    )
  }
}

export default FindNearestOffice;
