import React, { PropTypes } from 'react'
import { translate } from 'react-i18next'

const Todo = ({ onClick, onDrop, completed, text, t }) => (
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
    <button onClick={onDrop}>{t('dashboard.body.drop')}</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default translate('common')(Todo)