import React from 'react';
import { connect } from 'react-redux';

import * as mapActions from '../../actions/map';
import * as officeActions from '../../actions/offices';

import Map from './Map';

const MapView = props => {
  return <Map
    activateBasemap={props.activateBasemap}
    selectOffice={props.selectOffice}
    activeBasemap={props.activeBasemap}
    basemaps={props.basemaps}
    offices={props.offices}
  />;
};

const mapStateToProps = state => {
  return {
    basemaps: state.map.basemaps,
    activeBasemap: state.map.basemaps.filter(b => b.active)[0].url,
    offices: state.offices.features
  }
};

const mapDispatchToProps = dispatch => {
  return {
    activateBasemap: name => dispatch(mapActions.activateBasemap(name)),
    selectOffice: office => dispatch(officeActions.selectOffice(office))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
