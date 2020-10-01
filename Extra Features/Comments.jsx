import React from 'react'
import '../Style/Comments.css'
import SortIcon from '@material-ui/icons/Sort';
import { Avatar } from '@material-ui/core';
import CommentCard from './CommentCard'

function Comments() {
    return (
        <div className="commentSection">
            {/* number of comments - comment text input - comments  */}
            <p>
                3 Comments <SortIcon /> SORT BY
            </p>

            <div>
                <Avatar
                    src="https://yt3.ggpht.com/a-/AOh14GiJ_kIfMBiP42oaOlOVQiIs_kKOo8XLnM689VQgQQ=s88-c-k-c0xffffffff-no-rj-mo"
                /> <input type="text" placeholder="Add a public comment..." className="comment-input-box" />
            </div>
            
            <CommentCard
                image="https://yt3.ggpht.com/a-/AOh14GiJ_kIfMBiP42oaOlOVQiIs_kKOo8XLnM689VQgQQ=s88-c-k-c0xffffffff-no-rj-mo"
                name="Bobby Black"
                time="40 minutes ago"
                comment="Looks Good!"
            />

            <CommentCard
                image="https://yt3.ggpht.com/a-/AOh14GiJ_kIfMBiP42oaOlOVQiIs_kKOo8XLnM689VQgQQ=s88-c-k-c0xffffffff-no-rj-mo"
                name="Faiz Fabulous"
                time="5 minutes ago"
                comment="Noob"
            />

            <CommentCard
                image="https://yt3.ggpht.com/a-/AOh14GiJ_kIfMBiP42oaOlOVQiIs_kKOo8XLnM689VQgQQ=s88-c-k-c0xffffffff-no-rj-mo"
                name="Nabeel Bai"
                time="1 day ago"
                comment="Nalla iruku"
            />

        </div>
    )
}

export default Comments
