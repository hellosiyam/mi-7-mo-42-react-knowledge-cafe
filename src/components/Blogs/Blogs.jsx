import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = ({handelAddToBookmarks}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
        
    }, [])
    return (
       <div className="w-2/3">
            <h2 className="text-4xl">Blogs : {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                handelAddToBookmarks={handelAddToBookmarks}
                ></Blog>)
            }
       </div>     
    );
};

Blogs.propTypes = {
    handelAddToBookmarks : PropTypes.func.isRequired,
}

export default Blogs;