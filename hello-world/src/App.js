import './App.css';
import { Route, Routes } from 'react-router-dom';
import ItemsPage from './ch17pdtest/pages/ItemsPage';



function App() {
  //방법1
  // const [category, setCategory] = useState("food")
  // const onSelect = useCallback(
  //     category => setCategory(category)
  //     ,[])
  // return (
  //   <div>
  //     <Categories category={category} onSelect={onSelect}/>
  //     <ItemList category={category}/> 
  //   </div>
  // );


  //방법2

  return (
    <Routes>
      <Route path="/" element={<ItemsPage/>}/>
      <Route path="/:category" element={<ItemsPage/>} />
    </Routes>
  );
}

export default App;
