import React from 'react';

function FoodHeader() {
  return (
  	<div className='row'>
      <span className='col-sm column-header'>Name</span>
      <span className='col-sm column-header'>Serving Count</span>
      <span className='col-sm column-header'>Total Calories</span>
      <span className='col-sm column-header'>Edit Food</span>
      <span className='col-sm column-header'>Remove Food</span>
    </div>
  );
}

export default FoodHeader;


