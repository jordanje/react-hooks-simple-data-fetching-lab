// create your App component here
import { useState, useEffect } from "react";

export default function App () {
    const [img, setImg] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setImg(data.message))
    }, [])

    if(!img) return <p>Loading...</p>

    return (
        <div>
            <img  src={img} alt="A Random Dog"/>
        </div>
    )
}

