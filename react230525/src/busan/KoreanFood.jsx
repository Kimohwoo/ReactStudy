import React from 'react';

function KoreanFood(props) {
  return (
    <div>
      <h1>{`${props.name}`}</h1>
      <h2>{`재료 : ${props.material}`}</h2>
    </div>
  );
}
export default KoreanFood;
