import React, {Component} from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import './itemList.css';

export default class ItemList extends Component {
    gotService = new gotService()

    state = {
        charlist : null
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
        .then((charlist) =>{
            this.setState({
                charlist
            })
        })
    }
    renderItms(arr){
        return arr.map((item, i) =>{
            return(
                <li 
                    key ={i} 
                    className="list-group-item"
                    onClick= { () =>this.props.onCharSelected(41 +i)}>
                    {item.name}
                </li>
            )
        })
    }
    render() {
        const {charlist} = this.state;

        
        if(!charlist){
            return <Spinner/>
        }

        const items = this.renderItms(charlist)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}