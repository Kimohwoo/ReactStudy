import React from 'react';

function Dog(props) {
  return (
    //jsx 문법 형태
    //jsx : javascript and Xml or html
    <div>
      <h1>{`강아지의 이름: ${props.name}`}</h1>
      <h2>{`강아지의 나이: ${props.age}`}</h2>
    </div>
  );
}
export default Dog;
