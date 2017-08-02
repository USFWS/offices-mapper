import React from 'react';
import { connect } from 'react-redux';
import * as officeActions from '../../actions/offices';
import * as queryActions from '../../actions/query';
import { getVisibleFeatures } from '../../api/OfficesAPI';

import List from './list';
import Input from '../common/Input';

const ListView = props => {
  const visibleFeatures = getVisibleFeatures(props.offices);
  return (
    <div className="list-view-container">
      <h2>Search for U.S. Fish and Wildlife Service Offices</h2>
      <p>Use the search input below to search for field stations, refuges, fish hatcheries, etc.  Search by office name, type, state, etc.</p>
      <Input query={props.query} search={props.search} update={props.update} placeholder='Search offices...'/>
      <List offices={visibleFeatures} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    offices: state.offices.features,
    query: state.query
  }
};

const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(officeActions.search(query)),
    update: query => dispatch(queryActions.update(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
