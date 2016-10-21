import React, { PropTypes } from 'react';

import HeaderComponent from './common/HeaderComponent';

const App = (props) => {
  return(
    <div className="container">
      <div className="row">
        <HeaderComponent />
      </div>
      <div className="row">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
