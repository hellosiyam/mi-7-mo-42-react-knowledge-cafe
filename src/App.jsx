import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handelAddToBookmarks = blog => {
    console.log('Book Marks adding soon');
    
  }
  return (
    <>
      <Header></Header>
      <main className='max-w-7xl mx-auto md:flex justify-between'>
      <Blogs handelAddToBookmarks={handelAddToBookmarks}></Blogs>
      <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
