import './PostItem.css'

const PostItem = ({ post, onCompleted, onCanceled }) =>
(<div className="PostItem">
    <span className='PostItem-left'>
        <span className='PostItem-text'>
            <span className='PostItem-id'>{post.id}</span>
            {post.title}
        </span>
        <span className='PostItem-date'>
            {post.tags.join(', ')}
        </span>
    </span>
    <span className='PostItem-right'>
        <span className='PostItem-status'>{post.active ? 'Active': 'Not active'}</span>
        <span className='PostItem-button fas fa-circle-check ok' onClick={() => onCompleted(post)}></span>
        <span className='PostItem-button fas fa-circle-xmark danger' onClick={() => onCanceled(post)}></span>
    </span>
</div>)

export default PostItem;