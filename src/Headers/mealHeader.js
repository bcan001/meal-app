import React from 'react';

function MealHeader() {
  return (
  	<div className='row'>
      <span className='col-sm column-header'>Title</span>
      <span className='col-sm column-header'>Time</span>
      <span className='col-sm column-header'>Calories</span>
      <span className='col-sm column-header'>Health Rating</span>
      <span className='col-sm column-header'>&nbsp;</span>
    </div>
  );
}


export default MealHeader;