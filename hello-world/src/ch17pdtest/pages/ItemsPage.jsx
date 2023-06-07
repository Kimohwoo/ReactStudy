import React from 'react';
import Categories from '../Categories';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';


const ItemsPage = ({match}) => {
    const params = useParams();
    const category = params.category || 'food';
    return (
        <>
            <Categories/>
            <ItemList category={category}/>
        </>
    );
};

export default ItemsPage;