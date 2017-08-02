import React from 'react';
import { connect } from 'react-redux';
import { findNearest } from '../../api/OfficesAPI';
import * as officeActions from '../../actions/offices';

import Geolocate from '../icons/Geolocate';

class Sidecar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
  }

  getCurrentPosition() {
    this.setState({ loading: true });
    navigator.geolocation.getCurrentPosition(position => {
      const nearestOffices = findNearest(this.props.offices, position);
      this.props.selectNearestOffices(nearestOffices);
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <ul className='sidecar'>
        <li>
          <button className="sidecar-link" onClick={this.getCurrentPosition}>
            <span className='sidecar-label'>Find nearby offices</span>
            <Geolocate loading={ this.state.loading ? 'loading' : ''} />
          </button>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    offices: state.offices.features
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectNearestOffices: offices => dispatch(officeActions.nearestOffices(offices))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidecar);
