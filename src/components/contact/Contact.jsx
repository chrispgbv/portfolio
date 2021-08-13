import { useState } from "react";
import "./contact.scss"

export default function Contact() {
    const[message, setMessage] = useState(false)
    const handleSubmit = (e) =>{
        setMessage = true
        e.preventDefault()
    }

    return (
        <div className = "contact" id = "contact">
        </div>
    )
}
