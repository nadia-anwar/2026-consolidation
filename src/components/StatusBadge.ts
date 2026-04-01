
type Status  = "Active"| "Inactive" | "Pending"
    interface StatusBadgeProps  {
        status: Status

    }

function StatusBadge ({status}:StatusBadgeProps){
    


    return(
        <span>{status}</span>
    )
}

export default StatusBadge