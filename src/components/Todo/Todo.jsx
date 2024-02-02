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

  const handleOpenDialog = () => setIsOpen((prevState) => !prevState)
  const handleSetFieldValue = (fieldName, value) => 
    setFormData((prevState) => ({ ...prevState, [fieldName]: value }))
  const handleChangeTab = (tabValue) => setTab(tabValue)

  return (
    <div className='todo-wrapper'>
      <TodoHeader 
        handleOpenDialog={handleOpenDialog}
        isOpen={isOpen}
        handleSetFieldValue={handleSetFieldValue}
        formData={formData}
      />

      <TodoActions
        handleChangeTab={handleChangeTab}
        tab={tab}
      />

      <TodoRender />
    </div>
  )
}

export default Todo
