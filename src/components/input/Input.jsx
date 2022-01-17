import React, { useContext } from 'react'
import { dataContext } from '../../context/dataContext'
import classes from './Input.module.css'

function Input() {

    const {state, changeInput} = useContext(dataContext)

    return (
        <div>
            <input onChange={e => changeInput(e.target.value) } className={classes.textHolder} type="text"  value={state.input}/>
        </div>
    )
}

export default Input
