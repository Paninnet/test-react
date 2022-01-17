import React, { useContext } from 'react'
import { dataContext } from '../../context/dataContext'
import classes from './Item.module.css'

function Item() {
    const { state, changeSelect , remove_item} = useContext(dataContext)
    let style = {
        backgroundColor: "red"
    }
    return (
        <div>
            {
                state.todoList.map((item, i) => {
                    return (
                        <div key={item.Time} style={item.status == "None" ? style={backgroundColor : "grey"} : item.status == "In Progress" ? style={backgroundColor : "blue"} : item.status == "Need Review" ? style={backgroundColor:"purple"} : style={backgroundColor : "green"}} 
                         className={classes.item_wrapper}>
                            <p className={classes.itemText}>{i + 1})</p>
                            <p className={classes.itemText}>{item.body}</p>
                            <p className={classes.itemText}>{item.date}</p>
                            <div>
                                <select value ={item.status} onChange={e => changeSelect(e.target.value,i ,item)} name='status' id='status'>
                                    {state.selectedList.map((item, i) => {
                                        return (
                                            <option key={item.Time} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                                <button className={classes.deleteItem} onClick={() =>remove_item(item.Time)} >Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Item
