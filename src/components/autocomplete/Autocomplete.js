import React from 'react';
import { connect } from 'react-redux';
import findParent from 'find-parent';

import { getVisibleFeatures } from '../../api/OfficesAPI';
import * as queryActions from '../../actions/query';
import * as officeActions from '../../actions/offices';
import * as autocompleteActions from '../../actions/autocomplete';

import Input from '../common/Input';
import AutocompleteResult from './AutocompleteResult';

const Autocomplete = props => {

  const visibleFeatures = getVisibleFeatures(props.offices);

  const focusHandler = () => {
    setTimeout(() => { // Need setTimeout hack for activeElement to change
      const childOfAutocomplete = findParent.byClassName(document.activeElement, 'autocomplete');
      if (childOfAutocomplete) props.showAutocompleteResults();
      else props.hideAutocompleteResults();
    }, 0);
  };

  return (
    <aside className='autocomplete' onBlur={focusHandler} onFocus={focusHandler}>
      <Input placeholder='Search offices...'
        query={props.query}
        search={props.search}
        update={props.updateQuery}
      />
      <ul className={`results-list ${ props.showResults ? 'active' : ''}`}>
        {
          visibleFeatures.map((o, i) => {
            return <AutocompleteResult
              key={i}
              office={o}
              onOfficeClick={props.selectOffice}
            />
          })
        }
      </ul>
    </aside>
  );
};

const mapStateToProps = state => {
  return {
    offices: state.offices.features,
    query: state.query,
    showResults: state.autocomplete.showResults
  }
};

const mapDispatchToProps = dispatch => {
  return {
    search: query => dispatch(officeActions.search(query)),
    updateQuery: query => dispatch(queryActions.update(query)),
    selectOffice: office => dispatch(officeActions.selectOffice(office)),
    showAutocompleteResults: () => dispatch(autocompleteActions.showAutocompleteResults()),
    hideAutocompleteResults: () => dispatch(autocompleteActions.hideAutocompleteResults())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
