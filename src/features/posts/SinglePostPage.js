import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { TimeAgo } from "./TimeAgo";
import { AddComment } from "./AddComment";

const SinglePostpage = () => {
    let params = useParams();
    const { postId } = params;
    // console.log('uselocation >>>', useLocation());
    // console.log('useparams >>>', useParams());
    // console.log('use navigate >>>', useNavigate());

    const [status, setStatus] = useState(false);


    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const handleClick = (e) => {
        setStatus(!status);
    }

    return (

        <section>
            <article className="post">
                <h4 title="press to back"><Link to={'/postlist'}>Posts</Link></h4>
                <div className="singlePost">
                    <h3>{post.title}</h3>
                    <div className='name-author'>
                        <i>conducted by {post.user}</i>
                        <TimeAgo timestamp={post.date} />
                    </div>


                    <p className="post-content">{post.content}</p>

                    <Link to={`/editpost/${post.id}`}>
                        <button>Edit Post</button>
                    </Link>
                    <button type="button" onClick={handleClick}>
                        {!status ? 'Show Comments' : 'Hide comment'}
                    </button>
                    {status &&
                        < AddComment />
                    }






                </div>

            </article>
        </section>
    )
}
export default SinglePostpage;

