import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import '../css/stylesComponents/toDoItems.css'

import { Checked } from "./complete&&delete/checked"
import { Delete } from "./complete&&delete/delete"
import {Lista} from "./complete&&delete/lista"




function TodoItem({contenido,id,array,completedTodos}) {

    const [state2,setState2] = React.useState(false);

    const completeOrDelete = message => alert(message);
    
  return(
      /* llamo la props.text que esta pendiente por definir, en el documento en el que voy a importar esta funcion y en los demas en los que lo requiera */
    <div
    className="div-items">
    <li
    id = {id}
    className =
    {`li-Items ${state2 && 'is-active-tachado-li-item'}`}>
        {contenido}
    </li>
        
    
    <input  className =
            {`li-btn-say-yes ${state2 && 'is-active-btn-say-yes'}`}
            type = "checkbox"
            id = {id}
            onClick = {(event)=>{
                event.stopPropagation();

                if(event.target.id){
                   array.push(event.target.parentElement.firstChild)
                   if(array.includes(event.target.id)){
                       array.pop()
                   }
                    console.log(array)
                    setState2(event.target.checked)
                }
                console.log(state2)
                console.log(id)
                console.log(event.target.id)
                console.log(event.target.parentElement)
            }}>
    </input>
  


  <span
    title = "delete"
    className = "li-btn-delete"
    type = "button"
    onClick = {()=>{
        setTimeout(()=>{alert(`haz eliminado la tarea ${contenido}`)},500)
    }}
    >
<i
    className="fas fa-trash-alt">
</i>
</span>
        {/* <span
            title = "delete"
            className = "li-btn-delete"
            type = "button"
            onClick = {()=>{
                setTimeout(()=>{completeOrDelete(`haz eliminado la tarea ${props.contenido}`)},500)
            }}
            >
        <i
            className="fas fa-trash-alt">
        </i>
        </span> */}
    </div>
)
}

export { TodoItem };

/* onClick = {(e) =>{completeOrDelete(`haz completado tu tarea ${props.contenido}`)
            console.log(e.target)}} */