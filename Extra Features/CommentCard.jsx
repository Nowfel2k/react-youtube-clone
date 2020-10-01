import React from 'react'
import { ThumbsUpDownSharp, ThumbUpAltSharp } from '@material-ui/icons';

function CommentCard({ image, name, time, comment }) {
    return (
        <div className="commentCard">
            <Avatar src={image} />
            <h4>{name} <span>{time}</span></h4>
            <p>{comment}</p>
            <ThumbsUpAltSharp />
            <ThumbsUpDownSharp />
            <button>REPLY</button>
        </div>
    )
}

export default CommentCard
