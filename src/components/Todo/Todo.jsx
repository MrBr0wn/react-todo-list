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

const Todo = () => {
  const [tab, setTab] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDisplayTodo, setOpenDisplayTodo] = useState(false)
  const [todo, setTodos] = useState([])
  const [formData, setFormData] = useState(initialFormData)

  console.log('formData: ', formData)

  const handleOpenDialog = () => setIsOpen((prevState) => !prevState)
  const handleSetFieldValue = (fieldName, value) => 
    setFormData((prevState) => ({ ...prevState, [fieldName]: value }))

  return (
    <div className='todo-wrapper'>
      <TodoHeader 
        handleOpenDialog={handleOpenDialog}
        isOpen={isOpen}
        handleSetFieldValue={handleSetFieldValue}
        formData={formData}
      />

      <TodoActions />

      <TodoRender />
    </div>
  )
}

export default Todo
