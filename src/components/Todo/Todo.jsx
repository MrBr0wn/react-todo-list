import { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoActions from '../TodoActions/TodoActions'
import TodoRender from '../TodoRender/TodoRender'
import { v4 as uuidv4 } from 'uuid'
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
  const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false)
  const [todos, setTodos] = useState([])
  const [formData, setFormData] = useState(initialFormData)
  
  const resetAll = () => {
    setIsOpen(false)
    setIsOpenDisplayTodo(false)
    setFormData(initialFormData)
  }

  console.log('todos: ', todos)

  const handleOpenDialog = () => setIsOpen((prevState) => !prevState)
  const handleSetFieldValue = (fieldName, value) => 
    setFormData((prevState) => ({ ...prevState, [fieldName]: value }))
  const handleChangeTab = (tabValue) => setTab(tabValue)
  const handleSetTodoOnSubmit = (e) => {
    e.preventDefault()

    setTodos((prevState) => [...prevState, { ...formData, id: uuidv4() }])
    resetAll()
  }
  const handleMarkTodo = (isChecked, index) => {
    const updatedTodos = todos.slice()
    updatedTodos.splice(index, 1, { ...todos[index], isFinished: isChecked })
    setTodos(updatedTodos)
  }

  const handleOpenTodo = (todo) => {
    setIsOpenDisplayTodo(true)
    setFormData(todo)
  }

  return (
    <div className='todo-wrapper'>
      <TodoHeader 
        handleOpenDialog={handleOpenDialog}
        isOpen={isOpen}
        handleSetFieldValue={handleSetFieldValue}
        formData={formData}
        handleSetTodoOnSubmit={handleSetTodoOnSubmit}
      />

      <TodoActions
        handleChangeTab={handleChangeTab}
        tab={tab}
      />

      <TodoRender 
        todos={todos}
        handleMarkTodo={handleMarkTodo}
        handleOpenTodo={handleOpenTodo}
      />
    </div>
  )
}

export default Todo
