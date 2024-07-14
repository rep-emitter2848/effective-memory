import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Abnormality Dissolution</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/new" className="pinkButton">New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;