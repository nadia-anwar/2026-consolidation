
interface ProfileCardProp {
    name:string,
    age:number,
    role:string,
    country:string,
    bio?:string

}


function ProfileCard({name, age, role, country, bio}:ProfileCardProp){

    const product = {
  id: 1,
  name: "shoes",
  price: 89,
  category: "footwear"
};

const {name:productName, price, color ="black"} = product

const order = {
  id: 101,
  customer: {
    name: "Nadia",
    email: "nadia@example.com"
  },
  total: 189
};

const {id, customer:{name, email}, total} = order

const user = {
  id: 1,
  name: "Nadia",
  password: "secret123",
  role: "Director",
  country: "USA"
};

const defaults = { theme: "light", language: "English", fontSize: 16 };
const userPrefs = { theme: "dark", fontSize: 18 };

const merged = {...defaults, ...userPrefs} 

const {password, ...safeUser} = user


function buildProfile(name, role, ...tags){
    return `${name} | ${role} | ${tags.join(", ")}`
}

console.log(buildProfile("Nadia", "Director", "React", "TypeScript", "QA"))
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