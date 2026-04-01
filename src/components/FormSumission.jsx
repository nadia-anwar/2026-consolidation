function FormSubmission(){

function submitform(e){
    e.preventDefault()
    console.log("form was submitted")
}

    return(
        <form onSubmit={submitform}>
            <input onChange={(e) => e.target.value}/>
            <button type="submit">submit</button>
        </form>
    )
}