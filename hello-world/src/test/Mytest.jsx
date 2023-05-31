//비구조화 할당 부분, 디폴트 props 부분, propType

// import React from 'react';
// import ProptTypes from 'prop-types';

// const Mytest = ({name, number, children}) => {
//     return (
//         <div>
//             이름은: {name}입니다.<br/>
//             children 값 : {children}<br/>
//             좋아하는 숫자는 : {number}
//         </div>
//     );
// };

// //디폴트 props 선언
// Mytest.defaultProps = {
//     name: '기본이름'
// };

// //props 타입 지정 및 설정을 안했을시 에러 체크
// Mytest.ProptTypes = {
//     name: ProptTypes.string,
//     number: ProptTypes.number.isRequired
// };

// export default Mytest;

import React, { Component } from 'react';
import ProptTypes from 'prop-types';

class Mytest extends Component {
  render() {
    const { name, number, children } = this.props;
    return (
      <div>
        이름은: {name}입니다.
        <br />
        children 값 : {children}
        <br />
        좋아하는 숫자는 : {number}
      </div>
    );
  }
}

Mytest.defaultProps = {
  name: '기본이름',
};

Mytest.ProptTypes = {
  name: ProptTypes.string,
  number: ProptTypes.number.isRequired,
};

export default Mytest;
