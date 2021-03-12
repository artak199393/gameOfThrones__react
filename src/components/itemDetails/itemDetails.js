import React, {useCallback, useEffect, useState} from 'react';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import './itemDetails.css';

const Field = ({item, field, label}) =>{
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export {Field} ;

function ItemDetails ({itemId, getData, children}) {
const [item, setItem] = useState();
    
    useEffect( () => {
        if(itemId){
            updateItem();
        }
        // itemId && updateItem();
    },[itemId])
    
    const updateItem =  useCallback(() =>{
        getData(itemId)
            .then((item) => {
                setItem(item);
            })
    },[getData,itemId,setItem]);
   
        if(!item){
            return <span className='select-error'>Please select a character</span>
        }
        const {name} = item;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) =>{
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
}export default ItemDetails;