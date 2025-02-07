import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='md:flex justify-between items-center'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
