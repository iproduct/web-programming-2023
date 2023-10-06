import { useParams } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const {postId} = useParams();
    return (
        <h2>Post Details for ID: {postId}</h2>
    );
}

export default PostDetails;