import PostItem from './PostItem';
import './PostsList.css';

const PostsList = ({ posts, ...rest }) => (
    <div className="PostsList-container">
        {posts.map(
            post => (<PostItem key={post.id} post={post} {...rest} />)
        )}
    </div>
)

export default PostsList;