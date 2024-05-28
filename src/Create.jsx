import  { useState } from 'react'
import './Create.css'
import axios from 'axios'
function Create() {
  const [task, setTask] = useState()

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', {task: task})
    .then((res) => {
      location.reload()
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })

  }
  return (
    <div className='create_form'>
      <input type="text" name="" id="" onChange={(e)=>setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button>

    </div>
  )
}

export default Create
