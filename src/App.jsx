import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './components/Book'
import BookByTitle from './components/BookByTitle'
import BookByAuthor from './components/BookByAuthor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Book />
      <BookByTitle title="Shoe Dog" />
      <BookByAuthor author="Harper Lee" />
    </>
  )
}

export default App
