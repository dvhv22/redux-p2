import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postsAdded } from './postsSlice'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [user, setUser] = useState('');

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onUserChanged = e => setUser(e.target.value)

    const onSavePostClicked = () => {
        if (title && content && user) {
            // way using dispatch
            dispatch(
                postsAdded({
                    id: nanoid(),
                    title,
                    content,
                    user,
                    date: new Date().toISOString()
                })
            )

            setTitle('')
            setContent('')
            setUser('');
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <br />
                <br />
                <label htmlFor="postUser">Author:</label>
                <input
                    type="text"
                    id="postUser"
                    name="postUser"
                    value={user}
                    onChange={onUserChanged}
                />
                <br />
                <br />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <br />
                <button type="button" onClick={onSavePostClicked} >Save Post</button>
            </form>
        </section>
    )
}