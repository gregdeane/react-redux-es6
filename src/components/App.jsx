import React, { PropTypes } from 'react';

import Header from './common/Header';

const App = (props) => {
  return(
    <div className="container">
      <div className="row">
        <Header />
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
