import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';


const initialState = [
    {
        id: '1', title: 'First Post!', content: 'Hello!', user: 'Nguyen Van A',
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },

    {
        id: '2', title: 'Second Post', content: 'contents', user: 'Nguyen Thi B',
        date: sub(new Date(), { minutes: 10 }).toISOString()
    }
]



const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        postsAdded(state, action) {
            state.unshift(action.payload)
        },

        postUpdated(state, action) {
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
        postDelete(state, action) {
            state.splice(state.findIndex((post) => post.id === action.payload), 1);

        }
    }

})


export const { postsAdded, postUpdated, postDelete } = postsSlice.actions
export default postsSlice.reducer