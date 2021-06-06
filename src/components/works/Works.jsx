import "./works.scss"
import arrow from "./arrow.png"

export default function Works() {
    return (
        <div className = "work" id ="work"> 
        <div className="slider">
        <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                  </div>
                  <h2> Title </h2>
                  <p> I wrote my bachelors on creating a javascript library out by using canvas to create heart compressions for Laerdal Medicals manikins. </p>
                  <span>https://github.com/chrispgbv/haart</span>
                </div>
              </div>
              <div className="right">
              <img src="https://i.pinimg.com/564x/b6/97/61/b69761529fa0790d0a308b756e00b1e6.jpg" alt="" />
              </div>
            </div>
          </div>
          </div>
            <img src={arrow} className ="arrow left" alt="arrow" />
            <img src={arrow} className ="arrow right" alt="arrow" />
        </div>
    )
}
