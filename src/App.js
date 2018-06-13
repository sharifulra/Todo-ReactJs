import React from 'react';
import todos from './data.js'

class App extends React.Component{

  state = {
    todos :todos,
    createTodoText : ''
  }


  _createTodoText = (e) =>{
   let text =  e.target.value

this.setState({
  createTodoText:e.target.value
})
  }


  _createTodo =() =>{
    let todo = {
      id:Date.now(),
      text:this.state.createTodoText,
      completion:false
    }


    let todos = [...this.state.todos,todo];

    this.setState({
      todos:todos,
      createTodoText:''
    })
  }


  _toggleTodo =(td)=>{
 
    let tod = this.state.todos.map(todo =>{
      if(td.id == todo.id){
        return{
          id:todo.id,
          text:todo.text,
          completion:!todo.completion
        }
      }
      else{
        return todo
      }
    })


    this.setState({
      todos:tod
    })


  }

  _showTodoText = (todo) =>{

    if(todo.completion){
      return <span 
      onClick={()=>this._toggleTodo(todo)}
      className="lt">
      {todo.text}
      </span>
    }
    return<span
    onClick={()=>this._toggleTodo(todo)}
    
    >{todo.text}</span>
  }


  _updateBlock = ()=>{
    return
  }


  _deleteTodo=(td)=>{

let todos = this.state.todos.filter(todo=>td.id !== todo.id);

this.setState({
  todos
})
debugger;


  }

  render(){
    return <div>
         <div className="card mt-5">
      <div className="card-header">
        <h2>All todos</h2>
      </div>
      <div className="card-body">
      {
       
        this.state.todos.map(todo =>{
          return <li key={todo.id} style={{paddingTop:10}}> {
           this._showTodoText(todo)
     
          } 
          <button className="btn btn-sm btn-success" style={{marginLeft:20}} >
Edit
          </button>
          <button className="btn btn-sm btn-danger" style={{marginLeft:20}} onClick={()=>this._deleteTodo(todo)}>
delete
          </button>
          </li>
        })
      }
    </div>
    </div>

    <div className="card mt-3">
    <div className="card-header">
    <h2>Create a todo</h2>
    </div>
    <div className="card-body">
    <input 
    type="text"
    onChange={this._createTodoText}
    value = {this.state.createTodoText}
    />
    </div>

      <button 
      className="btn btn-success"
      onClick = {this._createTodo}
      >
Add Todo
      </button>
    </div>



    </div>
  }
}

export default App;