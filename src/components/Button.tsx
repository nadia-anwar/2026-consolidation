type ButtonVariant = "primary" | "secondary" | "danger";
    

interface ButtonProps {
    label: string;
    variant:ButtonVariant
}



function Button ({label, variant  }:ButtonProps){



    return(
        <div>
            <button className={variant}>{label}</button>
            
        </div>
    )
}