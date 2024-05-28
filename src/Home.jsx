import axios from "axios"
import Create from "./Create"
import './Home.css'
import { useState,useEffect } from "react"


function Home() {
        const [todos, setTodos] = useState([])
        useEffect(() => {
            axios.get('http://localhost:3001/get').then((res) => {
                setTodos(res.data)
                
            }).catch((err) => {
                console.log(err)
            })
        }, [])

        const deleteItem = (id) => {
            axios.delete('http://localhost:3001/delete/'+id)
            .then((res) => {
                location.reload()
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        const handleEdit = (id)=>{
            axios.put('http://localhost:3001/update/'+id)
            .then((res) => {
                location.reload()
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        }

return (
    <div className="home">
        <h2>Todo List</h2>
        <Create/>
        {
            todos.length === 0 ? <div><h2>No Records</h2></div> :
            todos.map((todo, index) => (
                    <div key={index} className="task">
                       
                        {todo.completed? <p style={{textDecoration: 'line-through'}}>{todo.task}</p>: <p>{todo.task}</p>  }
                            
                          <div>
                          {todo.completed? <h6 className="icon">Done</h6> :<h6 className="icon" onClick={()=>handleEdit(todo._id)}>Complete task</h6>   }
                            <h6 className="icon_delete" onClick={()=>deleteItem(todo._id)} > delete</h6>
                          </div>
                    </div>
            ))
        }

    </div>
)
}

export default Home
