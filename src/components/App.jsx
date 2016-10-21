import React, { PropTypes } from 'react';

const App = (props) => {
  return(
    <div className="container-fluid">
      <p>Header here...</p>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
