import React, {useEffect} from "react";

function Test(){
    useEffect(() => {
        fetch("http://localhost:3000/poems")
            .then(res => res.json())
            .then(data => console.log(data))
    })
    return(
        <div>
            
        </div>
    )
}

export default Test;