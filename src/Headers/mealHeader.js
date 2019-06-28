import React from 'react';

function MealHeader() {
  return (
  	<div style={{ display: 'flex'}}>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Title</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Day</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Date</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Time</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Total Calories</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Health Rating</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Foods</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Save Meal</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Remove Meal</span>
    </div>
  );
}


export default MealHeader;