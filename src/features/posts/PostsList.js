import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postDelete } from './postsSlice';
import { TimeAgo } from './TimeAgo';


export const PostsList = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    //console.log(posts);


    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <span className='close' onClick={() => dispatch(postDelete(post))}>x</span>
            <h3>{post.title}</h3>

            <div className='name-author'>
                <i>conducted by {post.user}</i>
                <TimeAgo timestamp={post.date} />
            </div>



            <p className="post-content">{post.content.substring(0, 100)}</p>
            <Link to={`/postlist/${post.id}`} className="button muted-button">
                <button>View Post</button>
            </Link>
        </article>
    ))

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}