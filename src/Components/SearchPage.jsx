import React from 'react'
import './Style/SearchPage.css'
import ChannelRow from './Child Components/ChannelRow'
import VideoRow from './Child Components/VideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <div className="searchPage__results">

                <ChannelRow
                    image="https://yt3.ggpht.com/a-/AOh14GiJ_kIfMBiP42oaOlOVQiIs_kKOo8XLnM689VQgQQ=s88-c-k-c0xffffffff-no-rj-mo"
                    channel="Liven Navfal"
                    verified
                    subs="900M"
                    numVideos="599"
                    description="Among Us | PUBG Mobile | Rocket League | Dark Souls | Walking Dead - Intense Gaming Platform!" />

                <ChannelRow
                    image="https://yt3.ggpht.com/a/AATXAJxnjfFfOi3WxZwoeHHshrZ-ZHFMrlM7ZklrMyz3=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="Liven Coder"
                    verified
                    subs="1000M"
                    numVideos="777"
                    description="Learn Javascript Full Stack Web Development | C++ Data Structures and Algorithms" />

                <hr /><br />

                <VideoRow
                    image="https://img.youtube.com/vi/t2CEgPsws3U/maxresdefault.jpg"
                    views="50,000"
                    title="Data Structures and Algorithm in 10 mins"
                    timestamp="1 day ago"
                    channel="Liven Coder"
                    description="Learn linear and non linear data structures, famous algorithms asked in coding interview and start coding today!"
                />

                <VideoRow
                    image="https://cdn.gamzo.in/files/media/2020/09/26122728/1f9249103f371671071532e02e3ab39d2da49cbe.png"
                    views="200,000"
                    title="Among Us - Imposter Tips and Tricks"
                    timestamp="10 day ago"
                    channel="Liven Navfal"
                    description="BEST TIPS TO WIN EVERY IMPOSTER GAME"
                />

                <VideoRow
                    image="https://sm.ign.com/t/ign_in/news/b/bloodborne/bloodborne-modders-discover-boss-fight-that-was-cut-from-the_unm1.1200.jpg"
                    views="500,000"
                    title="Bloodborne Boss Fight PS4"
                    timestamp="3 years ago"
                    channel="Liven Navfal"
                    description="Bloodborne DLC Maria Boss Fight - Excellent Guide"
                />

                <VideoRow
                    image="https://img-a.udemycdn.com/course/480x270/2018828_41a9_3.jpg"
                    views="5,000,000"
                    title="React Course Complete - 20 Hours Tutorial"
                    timestamp="4 years ago"
                    channel="Liven Coder"
                    description="Everything you need to know about React"
                />

                <VideoRow
                    image="https://thesportsrush.com/wp-content/uploads/2020/09/Screenshot-127.png"
                    views="100,000,000"
                    title="Among Us Insane Imposter Win"
                    timestamp="1 month ago"
                    channel="Liven Navfal"
                    description="Insane Among Us Gameplay"
                />


                <VideoRow
                    image="https://i.ytimg.com/vi/xOuRE3IuEB8/maxresdefault.jpg"
                    views="1,800,000"
                    title="Data Structure and Algorithms Course - Python"
                    timestamp="5 years ago"
                    channel="Liven Coder"
                    description="Complete Guide for Python DSA"
                />


                <VideoRow
                    image="https://i.ytimg.com/vi/OE-ENH5UP_k/maxresdefault.jpg"
                    views="18,000,000"
                    title="Rocket League 100 Million Subscribers Speacial"
                    timestamp="2 years ago"
                    channel="Liven Navfal"
                    description="Rocket League Best Goals Montage - Like and Subscribe"
                />
            </div>

        </div>
    )
}

export default SearchPage
