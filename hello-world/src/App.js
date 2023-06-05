import './App.css';
import { useCallback, useState } from 'react';
import Categories from './ch17pdtest/Categories';
import ItemList from './ch17pdtest/ItemList copy1-UI세팅-더미데이터확인';


function App() {
  const [category, setCategory] = useState("food")
  const onSelect = useCallback(
      category => setCategory(category)
      ,[])

  return (
    <div>
      <Categories category={category} onSelect={onSelect}/>
      <ItemList category={category}/> 
    </div>
  );
}

export default App;
