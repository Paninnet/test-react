import React, { useContext } from 'react'
import { dataContext } from '../../context/dataContext'

function Filter() {
   const { state, changeFilter } = useContext(dataContext)
   return (
      <div>
         
         Filter by: <select disabled={state.todoList.length <= 1 ? true : false} onChange={e => changeFilter(e.target.value)}>
            {state.filterItem.map((item, i) => {
               return <option key={i} value={item}>{item}</option>
            })}
         </select>
      </div>
   )
}

export default Filter
