import PropTypes from "prop-types";
import Bookmark from '../Bookmark/Bookmark'


const Bookmarks = ({bookmarks, markAsRead }) => {
    return (
        <div className='md:mx w-1/3 bg-gray-300 ml-4 mt-2 pt-4'>
            <div >
                <h3 className="text-3xl">Reading Time:{markAsRead}</h3>
            </div>
            <h1 className='text-3xl text-center ' >BookMarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) =>  <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks : PropTypes.array,
    markAsRead: PropTypes.number
}
export default Bookmarks;