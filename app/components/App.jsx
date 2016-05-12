import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import Header from './Header'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
  	<Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App