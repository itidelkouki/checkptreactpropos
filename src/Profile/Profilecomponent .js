import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = (props) => {
  console.log(props);

  const {
    FullName,
    Bio,
    Profession,
    children,
    handleAlert,
  } = props;

  return (
    <div>
      
      <h1 style={{color:'purple'}}>{FullName}</h1>
      <p>{Bio}</p>
      <h4> {Profession} </h4>
      {children}
      <button onClick={() => handleAlert(FullName)}>Name-user</button>
     
</div>
  );
}

//Defaultprops
ChildComponent.defaultProps = {
  Bio: 'This is a new profile user',
};


//PropTypes
ChildComponent.propTypes = {
  FullName: PropTypes.string.isRequired,
  Bio: PropTypes.string,
  Profession: PropTypes.string.isRequired,
  handleAlert: PropTypes.func.isRequired,
};

export default ChildComponent;


