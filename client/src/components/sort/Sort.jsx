import React, { useContext } from 'react'
import { dataContext } from '../../context/dataContext'

function Sort() {
   const {state, changeSort} = useContext(dataContext)
   return (
      <div>
         <select disabled={state.todoList.length <= 1 ? true : false}  onChange={(e) => changeSort(e.target.value)}>
         {state.sortItem.map((item) => {
            return (
               <option key={item} value={item}>{item}</option>
            )
         })}
         </select>

      </div>
   )
}

export default Sort
