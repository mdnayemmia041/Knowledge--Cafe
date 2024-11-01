import { useEffect, useState } from "react";
import Blog from '../components/blog/Blog';
import PropTypes from "prop-types";

const Blogs = ({ handleaddToBookmark , handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl ">Blogs: {blogs.length}</h2>
            <button>Mark As Read</button>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleaddToBookmark={handleaddToBookmark} handleMarkAsRead = {handleMarkAsRead}></Blog>)
                
            }
            
        </div>
        
    );
};

Blogs.propTypes = {
    handleaddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blogs;
