import { useState } from "react";

function Todo({ todo }) {
  const taskTitle = todo.title;
  const taskDiscription = todo.description;
  const textStyle = todo.flag
    ? { color: "gray", textDecoration: "line-through" }
    : {};
  // function handleToggleDone (){
  //     setDoneFlg(!doneFlg)
  // }

  return (
    <div class="toDoBlock">
      <h3 style={textStyle}> {taskTitle} </h3>
      <p style={textStyle}> {taskDiscription} </p>
      <button>{todo.flag ? "Cancel" : "Done"} </button>
    </div>
  );
}
export default Todo;
