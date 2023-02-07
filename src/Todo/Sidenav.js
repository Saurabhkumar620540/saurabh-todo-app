import React from 'react'
import styles from './TodoMain.module.css'

export default function Sidenav(props) {
  return (
    <div className={styles.home}>
    <ul>
        <li onClick={()=>{props.change("INBOX")}}>
            <div>Inbox</div>
        </li>
        <li onClick={()=>{props.change("TODAY")}}>
            <div>Today</div>
        </li>
        <li onClick={()=>{props.change("NEXT")}}>
            <div>Next 7 Days</div>
        </li>
        
    </ul>
    </div>
  )
}
