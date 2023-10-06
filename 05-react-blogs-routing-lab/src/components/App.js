import './App.css';
import { useEffect, useState } from "react";
import PostInput from './PostInput';
import API_CLIENT from '../services/api-client';
import PostsList from './PostsList';

function App() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        API_CLIENT.findAll()
            .then(tds => setPosts(tds))
            .catch(err => setError(err));
    }, []);

    async function addPost(post) {
        try {
            const created = await API_CLIENT.create(post)
            setPosts(state => [...state, created])
        } catch (err) {
            setError(err);
        }
    }
    async function completePost(post) {
        try {
            const index = posts.findIndex(td => td.id === post.id);
            if(index < 0) {
                // eslint-disable-next-line no-throw-literal
                throw `Post with ID="${post.id}" not found`;
            }
            const modified = { ...posts[index], active: true }
            await API_CLIENT.update(modified);
            setPosts(tds => tds.map(td => td.id === post.id ? modified : td));
        } catch (err) {
            setError(err);
        }

        setPosts(tds => tds.map(td => td.id === post.id ? ({ ...td, active: true }) : td))
    }
    async function cancelPost(post) {
        try {
            await API_CLIENT.deleteById(post.id)
            setPosts(tds => tds.filter(td => td.id !== post.id))
        } catch (err) {
            setError(err);
        }
        
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2>React TODOs</h2>
                {error && (<div className="error">{error}</div>)}
                <PostInput onCreatePost={addPost} onError={(err) => setError(err)} />
                <PostsList posts={posts} onCompleted={completePost} onCanceled={cancelPost} />
            </header>
        </div>
    );
}

export default App;