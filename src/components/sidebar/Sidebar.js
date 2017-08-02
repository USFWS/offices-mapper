import React from 'react';
import { connect } from 'react-redux';
import { getCurrentOffice } from '../../api/OfficesAPI';
import { selectOffice } from '../../actions/offices';
import { changeView } from '../../actions/sidebar';

import HowTo from './HowTo';
import CurrentOffice from './CurrentOffice';
import ContentSwitcher from './ContentSwitcher';
import NearestOffices from './NearestOffices';

const Sidebar = props => {
  const viewPicker = view => {
    switch(view) {
      case 'how-to':
        return <HowTo />
      case 'nearest-offices':
        return <NearestOffices offices={props.offices} selectOffice={props.selectOffice} />
      case 'current-office':
        return <CurrentOffice office={props.currentOffice.properties} />
      default:
        return '';
    }
  }

  return (
    <aside className='sidebar active'>
      <ContentSwitcher changeView={props.changeView}/>
      { viewPicker(props.view) }
    </aside>
  )
}

const mapStateToProps = state => {
  return {
    currentOffice: getCurrentOffice(state.offices.features),
    offices: state.offices.features,
    view: state.sidebar
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectOffice: office => dispatch(selectOffice(office)),
    changeView: view => dispatch(changeView(view))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
