// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteTodo} = props
  const {id, title} = itemDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="item">{title}</p>
      <button type="button" className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
