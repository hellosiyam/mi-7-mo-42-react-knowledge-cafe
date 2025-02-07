import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, handelAddToMarks, readingTime}) => {
    return (
            <div className='w-1/3 bg-gray-300 ml-4 mt-2'>
            <div className='px-10 py-5 text-center'>
                <h1 className='text-4xl'>Reading Time : {readingTime}</h1>
            </div>
            <h1 className='text-4xl text-center my-6'>Book Marks : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx} 
                    bookmark={bookmark}
                    handelAddToMarks={handelAddToMarks}
                    ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number.isRequired,
    handelAddToMarks : PropTypes.func.isRequired
};

export default Bookmarks;