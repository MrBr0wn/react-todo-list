import './TodoHeader.css'
import moment from 'moment'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const whiteColor = '#fff'
const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%'
  },
  finished: {
    fontSize: '46px',
    color: whiteColor
  },
  total: {
    display: 'flex',
    flexDirection: 'column',
    color: whiteColor 
  },
  weekDay: {
    color: whiteColor,
    fontSize: '28px'
  },
  date: {
    color: whiteColor,
    fontSize: '28px',
    marginLeft: 10
  }
}

function TodoHeader() {
  const weekDay = moment().format('dddd')
  const date = moment().date()

  return (
    <div className='todo-header'>
      <div style={styles.wrapper}>
        <div className="todos-count">
          <span style={styles.finished}>2</span>

          <div style={styles.total}>
            <span>Tasks</span>
            <span>/ 10</span>
          </div>
        </div>

        <div>
          <span style={styles.weekDay}>{weekDay}</span>
          <span style={styles.date}>{date}</span>
        </div>
      </div>

      <div>
        <div className="add-todo">
          <AddCircleIcon color='primary' />
          <span className='icon-background'></span>
        </div>
      </div>
    </div>
  )
}

export default TodoHeader