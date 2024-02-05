import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Checkbox from '@mui/material/Checkbox'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

import './TodoRender.css'

const Todo = ({
  todo,
  handleMarkTodo,
  index,
  handleOpenTodo
}) => {
  const isFinishedTodo = todo.isFinished ? 'todo-finished' : 'undefined'
  return (
    <div className='todo-container'>
      <span>
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
          onClick={(e) => handleMarkTodo(e.target.checked, index)}
          checked={todo.isFinished}
        />
      </span>

      <div className='todo-item' onClick={() => handleOpenTodo({ ...todo, index })}>
        <span className={isFinishedTodo}>{todo.todoName}</span>
        <ArrowRightIcon fontSize='small' />
      </div>
    </div>
  )
}

console.log('TOdoRender')

const TodoRender = (
  {todos, handleMarkTodo, handleOpenTodo}
) => {
  return (
    <div className='todos-renderer-wrapper'>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleMarkTodo={handleMarkTodo}
          index={index}
          handleOpenTodo={handleOpenTodo}
        />
      ))}
    </div>
  )
}

export default TodoRender