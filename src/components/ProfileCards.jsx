function ProfileCards({avatar, name, role, bio}){

    return(
        <div>
            
               <img src = {avatar}/>
               <p>{name}</p>
               <p>{role}</p>
               <p>{bio}</p>
            
        </div>
    )
}

export default ProfileCards