import React from 'react';

function WeekHeader() {
  return (
  	<div className='row'>
      <span className='col-sm column-header'>week number</span>
      <span className='col-sm column-header'>start week date</span>
      <span className='col-sm column-header'>end week date</span>
      <span className='col-sm column-header'>Total Calories</span>
      <span className='col-sm column-header'>Average Health Rating</span>
      <span className='col-sm column-header'>show days</span>
    </div>
  );
}


export default WeekHeader;