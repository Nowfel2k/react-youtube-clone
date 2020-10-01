import React from 'react'
import '../Style/SideBarRow.css'

function SideBarRow({ Icon, title, selected }) {
    return (
        <div className={`sidebar__row ${selected && "selected"}`}>
            <Icon className = "sidebar__icon" />
            <h1 className = "sidebar__title"> {title} </h1>
        </div>
    )
}

export default SideBarRow
