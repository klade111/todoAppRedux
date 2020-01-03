import React, { Component } from 'react'



class Todo extends Component {
    render() {
        const { tasks } = this.props
        return (
            <div className='container'>
                <div className='task-input'>
                    <h1 className='title'>TO-DO APP</h1>
                    <span style={{ float: 'right' }}>Add New Todo</span>
                    <input className='input-inner' type='text' value='' />
                    <button className="btn btn-primary">ADD</button>
                </div>
                <div>
                    <ul>
                        {tasks.map((el,i) => {
                            return <li>
                        <p style={{
                            color:"red"
                        }}>{el.task}</p>
                                <button onClick={()=>this.props.handleClickComplite(i)}>complite</button>
                                <button  onClick={()=>this.props.handleClickDelete(i)}>delete</button>

                            </li>
                        })}


                    </ul>

                </div>
            </div>
        )
    }
}
export default Todo