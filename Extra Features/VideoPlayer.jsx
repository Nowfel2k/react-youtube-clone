import React from 'react'
import '../Style/VideoPlayer.css'
import { ShareSharp, ThumbsUpDownSharp, ThumbUpAltSharp } from '@material-ui/icons';
import MenuOpenSharpIcon from '@material-ui/icons/MenuOpenSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import { Avatar } from '@material-ui/core';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Comments from './Comments'
import Suggested from './Suggested'

function VideoPlayer({ videoLink, title, views, timestamp, channelImage, channelName, description }) {
    return (
        <div className="videoPlayer">
            <div className="player">
                <iframe width="1226" height="480" src={videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="under-details">

                <div className="left-side">
                    {/* title, channel, subscribers, description */}
                    <h1> {title} </h1>
                    <p> {views} Views . Uploaded {timestamp} <ThumbUpAltSharp /> 50000 <ThumbsUpDownSharp /> 20 <ShareSharp /> SHARE <MenuOpenSharpIcon /> SAVE <MoreHorizSharpIcon /> </p>
                    <Avatar
                        src={channelImage}
                        alt={channelName}
                    /> <h3>{channelName}</h3>

                    <button className="sub-button">SUBSCRIBE<NotificationsSharpIcon /></button>

                    <p className="subs-display">
                        500M subscribers
                </p>

                    <h4 className="description-display">
                        {description}
                    </h4>

                    <p className="showmore-button">SHOW MORE</p>

                    <Comments />
                </div>

                <div className="right-side">
                    <Suggested />
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer
