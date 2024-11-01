import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Blogs from './components/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
// import { SiComsol } from 'react-icons/si';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  
  const handleaddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, mark) => {
    const newReadingTime = markAsRead + mark;
    setMarkAsRead(newReadingTime);
    console.log('hi');
    console.log(markAsRead,mark)
  
  
    // // console.log('remove id ')
    const remainingBookmarks = bookmarks.filter (bookmark => bookmark.id !== id);
    setBookmarks (remainingBookmarks)
  }
  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleaddToBookmark={handleaddToBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
      </div>
    </>
  )
}

export default App;
