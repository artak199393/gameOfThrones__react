import React, {useEffect, useState} from 'react';
import Spinner from '../spinner';
import './itemList.css';

function ItemList ({getData, onItemSelected, renderItem}) {
    
    const [itemList, updateList] = useState([]);
    
    useEffect( () =>{
        getData()
        .then((data) =>{
            updateList(data)
        })
    }, [])
    
    function renderItms(arr){
        return arr.map((item) =>{
            const {id} = item;
            const label = renderItem(item);
            return(
                <li 
                    key ={id} 
                    className="list-group-item"
                    onClick= { () => onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }
    
    if(!itemList){
        
        return <Spinner/>
    }
    const items = renderItms(itemList)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
}
export default ItemList;