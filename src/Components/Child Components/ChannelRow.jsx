import React from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckBoxRounded'
import '../Style/ChannelRow.css'

function ChannelRow({ image, channel, verified, subs, numVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar
                className="channelRow__logo"
                alt={channel}
                src={image}
            />
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p>
                    {subs} Subscribers • {numVideos} Videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
