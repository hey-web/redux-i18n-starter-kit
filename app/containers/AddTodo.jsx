import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { translate } from 'react-i18next'

let AddTodo = ({ dispatch, t }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          {t('dashboard.body.add')}
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(translate('common')(AddTodo))

export default AddTodo