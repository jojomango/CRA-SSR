import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Home = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default Home