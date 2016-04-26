import React, { PropTypes } from 'react'

const Todo = ({ onClick, onDrop, completed, text }) => (
  <li>
    <span
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      display: 'inline-block',
      width: '50px'
    }}
    >
    {text}
    </span>
    <button onClick={onDrop}>Drop</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo