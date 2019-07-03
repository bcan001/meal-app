import React from 'react';

function DayHeader() {
  return (
  	<div style={{ display: 'flex'}}>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Day</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Date</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Total Calories</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Average Health Rating</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>View Meals</span>
    </div>
  );
}

export default DayHeader;


