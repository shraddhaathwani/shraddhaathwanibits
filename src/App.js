import './App.css';
import profilepic from './img/Shraddha.png';
import bits from './img/bits.jpg';
import cg from './img/CGboard.jpg';
import csvtu from './img/CSVTU.jpg';

function App() {
  return (
    <div className="container-fluid App">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
   
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#profile">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#education">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#workexperience">Work Experience</a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <div className="container-fluid" id="home">
        <div className="row " style={{ backgroundColor: "#ffb700" }}>
          <div className="col-md-6">
            <img src={profilepic} width="350" height="300" alt="Shraddha Athwani" className="img-fluid bio-image" />
          </div>
          <div className="col-md-6">
            <h2 style={{ color: "white", paddingTop: "100px" }}>Shraddha Athwani</h2>
            <h4 style={{ color: "white", padding: "5px" }}>Verification and Validation Engineer</h4>
            <h5 style={{ color: "white", padding: "5px" }}>Medtronic, Hyderabad, INDIA</h5>
            <h6 style={{ color: "white", padding: "5px" }}>Contact Detail: 2020mt93018@wilp.bits.pilani.ac.in</h6>
            <a style={{ color: "white" }} href="https://github.com/prerna2909/prerna-profile" className="btn btn-github"><i style={{ fontSize: "24px" }} className="fa">&#xf09b;</i> GitHub Link</a>
          </div>
        </div>
      </div>
      <br />
  
      <hr />
      <br />
      <div className="container" id="profile" >
        <div className="row">
          <div className="col">
            <h4 style={{ color: "#ffb700", padding: "5px" }}>Profile</h4>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#E0E0E0", borderRadius: "0.5rem", padding: "20px" }}>
          <div className="col">
            <p>
            Around 9 years of experience in Verification and Validation for embedded prodcuts. I am Responsible for Quality of test deliverables, 
            time estimation, planning, tracking and taking corrective actions which is aligned with Medical process checkpoints.
            Have also worked for Aerospace and Railway domain as SOftware test engineer. Strong engineering professional with a Bachelor of
            Engineering (B.E.) focused in Computer Science and Master of Engineering (M.Tech) in Software
            Engineering(pursing).
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <div className="container" id="education">
        <div className="row">
          <div className="col">
            <h4 style={{ color: "#ffb700", padding: "5px" }}>Education</h4>
          </div>
        </div>
        <div className="row" >
          <div className="col">
            <div className="card-deck">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={bits} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">M.Tech Software Engineering</h5>
                  <p className="card-text">BITS Pilani</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">2020-2022</li>
                  <li className="list-group-item">Percentage : (pursing)</li>
                </ul>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={csvtu} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">B.E Computer Science</h5>
                  <p className="card-text">CSVTU University</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">2007-2011</li>
                  <li className="list-group-item">Percentage : 82.2%</li>
                </ul>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={cg} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">12th Science</h5>
                  <p className="card-text">CBSE</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">2006-2007</li>
                  <li className="list-group-item">Percentage : 78.6%</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
      <br />
      <br />
      <hr />
      <div className="container-fluid" id="workexperience" >
        <div className="row">
          <div className="col">
            <h4 style={{ color: "#ffb700", padding: "5px" }}>Work Experience</h4>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#ffb700", borderRadius: "0.5rem", paddingTop: "40px" }}>
          <div className="col">
            <div className="card-deck">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Medtronic</h5>
                  <p className="card-text">Software Enginner II</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><p>
                    Tool & Technologies – TestTrack, LabView, TestStand, Visual Studio, JIRA, Docker</p></li>
                  <li className="list-group-item">Duration: 30 Sep 2019 to till date</li>
                </ul>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Bombardier</h5>
                  <p className="card-text">Test Lead</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><p>
                    Tools & Technologies – TCMS products, ReqPro, SVN, JIRA, TestManager, TestSequence
                    </p></li>
                  <li className="list-group-item">Duration: 2nd Jan 2017 to 29th Sep 2019</li>
                </ul>
              </div>
            </div>
            <br />
            <br />

          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
