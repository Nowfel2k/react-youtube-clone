import React from 'react'
import '../Style/VideoRow.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function VideoRow({ views, description,
    timestamp, channel, title, image }) {
    return (
        <div className="videoRow">
            <img src={image} alt="{title}" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} • {views} Views • {timestamp}
                </p>
                <p className="videoRow__description">
                    {description}
                </p>
            </div>

        </div>
    )
}

export default VideoRow
