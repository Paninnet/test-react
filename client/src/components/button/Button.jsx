import React, { useContext } from 'react'
import { dataContext } from '../../context/dataContext'
import classes from './Button.module.css'

function Button() {
    const {sendInput} = useContext(dataContext)
    return (
        <div>
            <button onClick={sendInput} className={classes.findButton}>Add</button>
        </div>
    )
}

export default Button
