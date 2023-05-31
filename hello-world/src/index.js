import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AfterUseCallback from './ch7-3-useCallback/AfterUseCallback';

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
    <AfterUseCallback/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
