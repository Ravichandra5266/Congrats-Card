const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Congratulations</h1>
    <div className="cardBgContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile_logo"
      />
      <h1>Kiran V</h1>
      <p1 className="para">
        Vishnu Institute of Computer Education and Techonology,Bhimavaram
      </p1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch_logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
