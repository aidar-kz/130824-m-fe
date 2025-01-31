import React from 'react'
import css from './TodoList.module.css'
export default function TodoList(props) {
const { todo } = props
   
   return (
      <div>
         {
            todo.map(el => (
               <div className={css.descr} key={el.id}> 
                  <div className = {css.containerT}>
                  <div className= { `${ el.flag? css.red : css.green}`} >{el.flag}</div>
                  <h1 className= {el.flag? css.text: ""} >{el.title}</h1>
         </div>

                  <p> {el.description}</p>
         

            </div>
            ))
         }

      </div>
      
  )
}
