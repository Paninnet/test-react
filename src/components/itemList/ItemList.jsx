import React, { useContext } from 'react'
import { dataContext } from '../../context/dataContext'
import Item from '../item/Item'

function ItemList() {
    const {state} = useContext(dataContext)
    if (state.todoList.length == 0 ){
        return(
            <div>
                <h3>Add Something</h3>
            </div>
        )
    }
    return (
        <div>
            <Item></Item>
        </div>
    )
}

export default ItemList
