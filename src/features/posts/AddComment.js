import React, { useState } from "react";


export const AddComment = () => {
    const com = {
        name: 'Van D',
        text: 'totally fake news'
    }

    const [comment, setComment] = useState([com]);
    const [name, setName] = useState('');
    const [text, settext] = useState('');
    const onClickSave = (e) => {
        if (name && text) {
            let copyComment = { name: name, text: text };
            setComment([...comment, copyComment]);
            setName("");
            settext('');

        }

    }
    const handleChangename = (e) => {
        setName(e.target.value);

    }
    const handleOntext = (e) => {
        settext(e.target.value);

    }

    return (
        <>
            <div>
                <label htmlFor="username">userName</label><br />
                <input type='text' name="userName" placeholder="enter your name" value={name} onChange={handleChangename} />
                <br />
                <label htmlFor="textcomment">Your thought</label><br />
                <textarea type='text' name="textcomment" value={text} onChange={handleOntext} />
                <br />
                <button type="button" onClick={onClickSave}>Save</button>
            </div>
            <div className="comment-zone">
                {comment.map(comment => {
                    return (
                        <>
                            <div><i>{comment.name}:</i></div>
                            <div>{comment.text}</div>
                            <hr /><br />
                        </>

                    )
                })}
            </div>



        </>
    )

}