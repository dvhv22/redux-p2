import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom';

import { postUpdated } from './postsSlice'

export const EditPostForm = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({ id: postId, title, content }))
            navigate.push(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label><br />
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}
                /><br /><br />
                <label htmlFor="postContent">Content:</label><br />
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
            </form>
            <Link to={`/postlist/${post.id}`}>
                <button type="button" onClick={onSavePostClicked}>
                    Save Post
                </button>
            </Link>

        </section>
    )
}