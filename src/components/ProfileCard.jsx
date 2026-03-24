function ProfileCard({name, age, role, country, bio}){
    return(
        <div className="card">
        <h1 className="title">User Info</h1>
        <p>Name: {name}</p>
        <p className="age-id">Age: {age}</p>
        <p id="country">Country: {country}</p>
        <p>Role:{role}</p>
        <p className="bio"> {bio}</p>
    </div>
    )
}

export default ProfileCard