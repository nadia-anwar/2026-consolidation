/*Takes a count prop
Shows the count when count > 0
Shows nothing when count is 0
Make sure you avoid the 0 trap
*/







function NotificationBadge({notify_count}){

    if(notify_count === 0) return null
    return <span>{notify_count}</span>

    return(
        <div>
        </div>
    )
}

export default NotificationBadge

<NotificationBadge notify_count = {3}/>