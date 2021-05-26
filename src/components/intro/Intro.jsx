import "./intro.scss"
//mport me from "./me.jpg"
import { init } from 'ityped'
import {useEffect, useRef} from "react"

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay:1000,
            backSpeed:60,
            strings: ['UX-Designer to Be', 'Artist', 'Fron-End', 'Tester' , '.NET'] })
    
    }, []);

    return (
        <div className ="intro" id = "intro">
            <div className="left">
                <div className="imageContainer">
                    {/* <img src={me} alt="me"/> */}
                </div>

            </div>
            <div className="right">

                <div className="wrapper">
                    <h2> Hi There, I'm </h2>
                    <h1> Christine Valkner </h1>
                    <h3> Developer <span ref ={textRef}></span></h3>
                    <a href="#portfolio">
                        {/* create arrow her */}
                    </a>
                </div>

            </div>
        </div>
    )
}
