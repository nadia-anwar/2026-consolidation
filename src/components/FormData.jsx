import { useState } from "react"


function FormData(){

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState({}) // why {} here, not [] or even ""

function handleSubmitForm(e){
    e.preventDefault()

    const newErrors = {} // why do i need another variable 
    if (formData.name.length === 0){
        newErrors.name =  "Please enter a name" // reads first
    }

    if (formData.email.length === 0){
        newErrors.email ="Please enter an email" // reads only if 1 is fails
    }

    if (formData.message.length === 0){
        newErrors.message = "Please enter a message" // reads if two is faials 
    }

    if(Object.keys(newErrors).length === 0){
        setSuccess(true)
        setFormData({name:"", email:"", message:""}) // same only if all above fails 
    } else{
        setError(newErrors) // last read. Which means i couldn't put the orders of the failures anywhere i wanted?
    }
}

if (success) {
    return <p>Thank you!</p>
  }

  // {success && <p>Thank you</p>} - why didn't this work?


    return(
        <form onSubmit={handleSubmitForm} className="form">
            <label className="label">Name:
                <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name:e.target.value})}
            /> </label>

               {error.name && <p>{error.name}</p>}

             <label>Email:
                <input
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email:e.target.value})}
            />
            </label>
            {error.email && <p>{error.email}</p>}

<label>Message:
                <input
            type="text"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message:e.target.value})}
            />

            {error.message && <p>{error.message}</p>}

            </label>

            <button type="submit">Submit form</button>

            
        </form>
    )
}

export default FormData


