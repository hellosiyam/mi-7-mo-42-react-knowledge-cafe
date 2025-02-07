import PropTypes from 'prop-types';

const Blog = ({blog}) => {

    const {title, cover, author_img,author, posted_date, reading_time, hashtags} = blog

    return (
        <div>
            <h2 className='text-4xl'>{title}</h2>
            <img src= {cover} alt= {`Cover picture of the tittle: ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <img className='w-14' src={author_img} alt={`Profile picture : ${author}`} />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <div>
                {
                    hashtags.map((has, idx) => <span key={idx}><a href="">#{has}</a></span>)
                }
            </div>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}