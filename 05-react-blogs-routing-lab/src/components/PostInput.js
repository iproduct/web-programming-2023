import './PostInput.css'
import { useState } from "react"
import { Post } from "../model/post-model"

const PostInput = ({ onCreatePost, onError }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [active, setActive] = useState(true);

    function submitPost(event) {
        event.preventDefault();
        if (title.length === 0 || content.length === 0) {
            onError(`All fields are required`)
            return;
        }
        const created = new Post(title, content);
        created.active = active;
        onCreatePost(created);
        reset();
    }

    function reset(event) {
        setTitle('');
        setContent('');
        setActive(true);
        onError(undefined);
    }

    return (
        <form className='PostInput-form' onSubmit={submitPost} onReset={reset}>
            <input type="text" placeholder="Post title" value={title} onChange={(event) => { setTitle(event.target.value) }} />
            <input type="text" placeholder="Post content" value={content} onChange={(event) => { setContent(event.target.value) }} />
            <span>
                <input type="checkbox" placeholder="Post status" checked={active} onChange={(event) => { setActive(event.target.checked ? true : false) }} />
                Active
            </span>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default PostInput;