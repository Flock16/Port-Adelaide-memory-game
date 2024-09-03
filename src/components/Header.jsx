import "../styles/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-div">
        <div>
          <img className="port-logo" src="../public/newLogo1.png" />
        </div>
        <div>
          <h1 className="header-title">Port Adelaide Memory Game</h1>
        </div>
        <div>
          <img className="port-logo" src="../public/newLogo1.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
