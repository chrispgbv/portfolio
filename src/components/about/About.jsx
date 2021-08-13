import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
    <div className="card">
        
    </div>
      <div className="left">
        <div className="me">
          <img
            src="https://i.pinimg.com/236x/fa/04/d7/fa04d798c64e5c2734ae1899c51e576e.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="intorduction">
          <h2> Hello,</h2>
        </div>
        <div className="about-me">
          my name is Christine and I am a front-end developer, currently
          working at Veni. I have a bachelors degree in computer engineering from the University of
          Stavanger. Now I am doing a university course in UX design part-time
          while I work. Whilst I am not working or studing, I spend my time,
          painting, going to pole classes (incase the whole developer/UX thing
          doesn't work out) and playing games on my switch.
        </div>
      </div>
    </div>
  );
}
