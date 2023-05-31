import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Animal from './test/Animal';
import Tick from './test/Tick';
import WeekendSchedule from './test/WeekendSchedule';
import Mytest from './test/Mytest';
import CommentList from './ch5/CommentList';
import NotiList from './ch6/NotiList';
import MenuItemList from './0530실습/MenuItemList';
import TestSample from './ch6/TestSample';
import Input from './0530실습/Input';
import Counter from './ch7/Counter';
import TestBefort from './ch7-2-useMemo/TestBefort';
import TestAfter from './ch7-2-useMemo/TestAfter';

// setInterval(
//   () => {
//     ReactDOM.render(
//       <React.StrictMode>
//         {/* <Tick />
//         <WeekendSchedule schedule = "할일" />
//         <WeekendSchedule schedule = "할일2" /> */}
//         {/* <Mytest name="김오우" number={7}>
//           child영역 입니다.
//         </Mytest> */}
//       </React.StrictMode>,
//       document.getElementById('root')
//     )
//   },1000
// )

//생명주기를 테스트를 하는 코드에서, React.StrictMode제거하고 실행하는게 가독성면에서 좋음
//수행이 2번씩 일어남
ReactDOM.render(
  <React.StrictMode>
    <TestAfter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
