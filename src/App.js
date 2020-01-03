import React from 'react';
import {connect} from "react-redux"
import './App.css';
import Todo from './components/todo'
function App(props) {
console.log(props)
const handleClickComplite=(id)=>{
  props.complite(id)
}
const handleClickDelete=(id)=>{
props.delete(id)
}
  return (
    <div className="App">
    <Todo handleClickDelete={handleClickDelete} handleClickComplite={handleClickComplite} tasks={props.tasks}/>
    </div>
  );
}
const mapState=(state)=>{
  return {tasks:state}
}
const mapDispatch=(dispatch)=>{
  return {
    delete:(id)=>dispatch({type:"DELETE",payload:id}),
    complite:(id)=>dispatch({type:"COMPLITE",payload:id}),
  }
}
export default connect(mapState,mapDispatch)(App);
