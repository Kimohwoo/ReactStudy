import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ItemList from './ch17pdtest/ItemList copy1-UI세팅-더미데이터확인';

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

//최고 부모가 없음
//App.js 최고부모로 -> 1) categories 2) ItemList
// const [category, setCategory] = useState("food")
// const onSelect = useCallback(
//     (category) => setCategory(category)
//     ,[])

//생명주기를 테스트를 하는 코드에서, React.StrictMode제거하고 실행하는게 가독성면에서 좋음
//수행이 2번씩 일어남
ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <Categories category={category} onSelect={onSelect}/>
    <ItemList category={category}/> */}
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
