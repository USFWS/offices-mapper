import React from 'react';

const ContentSwitcher = props => {
  // Default to HowTo component, or when button is clicked
  // Switch to CurrentOffice component when user selects an Office
  // Switch to NearestOffices component when user searches for nearest offices

  const onClick = e => {
    const viewName = e.target.getAttribute('data-view');
    props.changeView(viewName);
  }

  return (
    <ul className='sidebar-view-switcher'>
      <li><button onClick={onClick} data-view='how-to'>Help</button></li>
      <li><button onClick={onClick} data-view='current-office'>Current Office</button></li>
      <li><button onClick={onClick} data-view='nearest-offices'>Nearest Offices</button></li>
    </ul>
  );
};

export default ContentSwitcher;
