import React from 'react';

function FoodHeader() {
  return (
  	<div style={{ display: 'flex'}}>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Name</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Serving Count</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Total Calories</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Edit Food</span>
      <span style={{ flex: 1, fontWeight: 'bold' }}>Remove Food</span>
    </div>
  );
}

export default FoodHeader;


