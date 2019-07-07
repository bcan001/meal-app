import React from 'react';

function DayHeader() {
  return (
  	<div className='row'>
      <span className='col-sm column-header'>Day</span>
      <span className='col-sm column-header'>Date</span>
      <span className='col-sm column-header'>Total Calories</span>
      <span className='col-sm column-header'>Average Health Rating</span>
      <span className='col-sm column-header'>View Meals</span>
    </div>
  );
}

export default DayHeader;


