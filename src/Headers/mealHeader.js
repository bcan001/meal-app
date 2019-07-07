import React from 'react';

function MealHeader() {
  return (
  	<div className='row'>
      <span className='col-sm column-header'>Title</span>
      <span className='col-sm column-header'>Day</span>
      <span className='col-sm column-header'>Date</span>
      <span className='col-sm column-header'>Time</span>
      <span className='col-sm column-header'>Total Calories</span>
      <span className='col-sm column-header'>Health Rating</span>
      <span className='col-sm column-header'>Foods</span>
      <span className='col-sm column-header'>Save Meal</span>
      <span className='col-sm column-header'>Remove Meal</span>
    </div>
  );
}


export default MealHeader;