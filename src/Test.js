import React, {useEffect, useState} from "react";
import Home from './components/Home'


function Test(){

    const [poems, setPoems] = useState([])
    // const [likes, setLikes] = useState([])

    //fetch poems
    useEffect(() => {
        fetch("http://localhost:3000/poems")
            .then(res => res.json())
            .then(data => setPoems(data))
    }, [])
    console.log(poems);

    // function addToLiked(id) {
    // //patch to user where user = user
    // //add title to liked
    // console.log(id)
    // let totalLikes = likes;
    // if (likes.includes(id)) {
    //   //unlike
    //   totalLikes = likes.filter((item) => item !== id)
    // } else {
    //   //like
    //   totalLikes = [...likes, id]
    // }

    // fetch(`https://shrouded-everglades-59715.herokuapp.com/users/${user}`, {
    // fetch(`http://localhost:3000/users/${user}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     liked: totalLikes
    //   })
    // })
    //   .then(res => res.json())
    //   .then(() => {
    //     setLikes(totalLikes)
    //   })

  // }
    return(
        <div>
            <Home poems={poems}/>
        </div>
    )
}

export default Test;