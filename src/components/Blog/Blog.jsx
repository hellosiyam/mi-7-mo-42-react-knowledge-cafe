import { FiBookmark } from "react-icons/fi";
import PropTypes from 'prop-types';

const Blog = ({blog, handelAddToBookmarks, handelReadTime}) => {

    const {id, title, cover, author_img,author, posted_date, reading_time, hashtags} = blog

    return (
        <div className='mb-16 mt-6'>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <img className='w-full rounded-xl h-[450px] object-cover' src= {cover} alt= {`Cover picture of the tittle: ${title}`} />
            <div className='flex justify-between mt-6 mb-4'>
                <div className='flex gap-4 items-center'>
                    <img className='w-14' src={author_img} alt={`Profile picture : ${author}`} />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=" flex gap-2 items-center">
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handelAddToBookmarks(blog)} className='cursor-pointer text-xl' type="button"><FiBookmark /></button>
                </div>
            </div>
            <div>
                {
                    hashtags.map((has, idx) => <span key={idx}><a href="">#{has}</a></span>)
                }
            </div>
            <div>
                <button onClick={()=> handelReadTime(reading_time, id)} className="text-purple-500 underline cursor-pointer">Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handelAddToBookmarks : PropTypes.func.isRequired,
    handelReadTime : PropTypes.func.isRequired
}