import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handelAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handelReadTime = (time, id) => {
    setReadingTime(readingTime + time); 
    
    const removeBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(removeBookmarks)     
  }


  return (
    <>
      <Header></Header>
      <main className='max-w-7xl mx-auto md:flex justify-between'>
      <Blogs handelAddToBookmarks={handelAddToBookmarks} handelReadTime={handelReadTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
