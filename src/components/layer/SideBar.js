import React from 'react'
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa'

export function SideBar() {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar_generic" >
                <li><span><FaInbox/></span><span>Inbox</span></li>
                <li><span><FaRegCalendar/></span><span>Inbox</span></li>
                <li><span><FaRegCalendarAlt/></span><span>Next 7 days</span></li>
            </ul>
            <div className="sidebar_middle">
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>
            <ul className="sidebar_projects">
                projects will be here
            </ul>
            Add project component here
        </div>
    )
}
