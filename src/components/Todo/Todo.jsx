import { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoActions from '../TodoActions/TodoActions'
import TodoRender from '../TodoRender/TodoRender'
import './Todo.css'

const initialFormData = {
  isEdit: false,
  todoName: '',
  todoNote: '',
  isFinished: false,
  id: '',
  index: null
}

function Todo() {
  const [tab, setTab] = useState(0)
  const [isOpen, setOpen] = useState(false)
  const [isOpenDisplayTodo, setOpenDisplayTodo] = useState(false)
  const [todo, setTodos] = useState([])
  const [formData, setFormData] = useState(initialFormData)

  const handleOpenDialog = () => setIsOpen((prevState) => !prevState)

  return (
    <div className='todo-wrapper'>
      <TodoHeader />

      <TodoActions />

      <TodoRender />
    </div>
  )
}

export default Todo
