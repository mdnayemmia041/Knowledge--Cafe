
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleaddToBookmark, handleMarkAsRead}) => {
    const {id,title,cover,author,reading_data,author_img,hashtag,posted_date}=blog
    console.log(blog)
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`Cover picture is the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className=' ml-6'>
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div className='mt-2'>
                    <span>{reading_data} min read</span>
                    <button onClick={()  => handleaddToBookmark( blog,id)} className='ml-2 text-2xl text-red-600'><FaRegBookmark /></button>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtag.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>
                    
                    )
                }
            </p>
            
            <button onClick={() => handleMarkAsRead (id, reading_data)}
            className='text-purple-700 underline font-bold'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleaddToBookmark:PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;