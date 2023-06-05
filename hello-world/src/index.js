import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TestNullValue from './ch11/TestNullValue';
import FormPractice from './0601실습/FormPractice';
import Calc from './ch12/Calc';
import TestInput from './ch12/TestInput';
import BMI from './0601실습/BMI';
import WelcomeDialog from './ch13/WelcomeDialog';
import Card from './ch13/Card';
import ProfileCard from './ch13/ProfileCard';
import Main from './ch14/Main';
import MainPage from './ch15/MainPage';

// setInterval(
//   () => {
//     ReactDOM.render(
//       <React.StrictMode>
//         {/* <Tick />
//         <WeekendSchedule schedule = "할일" />
//         <WeekendSchedule schedule = "할일2" /> */}
//         {/* <Mytest name="김" number={7}>
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
    <MainPage/>
  </React.StrictMode>,
  document.getElementById('root')
);
// setTimeout(
//   () => {
//     ReactDOM.render(<input value={null}/>, document.getElementById('root'))
//   },
//   1000
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
