function EventHandlers(){

    function submitForm(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log("Form submitted")    
    }

    return(
        <form onSubmit={submitForm}>        
            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}/>
            <button type="submit">Submit</button>
        
        </form>
    )
}