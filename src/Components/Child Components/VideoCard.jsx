import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import '../Style/VideoCard.css'

function VideoCard({ videoImage, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videocard">
            <img src={videoImage} alt="VIDEO IMAGE" />
            <div className="videocard__info">
                <Avatar className="videocard__avatar" alt={channel} src={channelImage} />
                <div className="videocard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p> {views} • {timestamp} </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
