import React from 'react';
import './home.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
    return (
<>

<nav className="navbar navbar-expand-lg navbar-light  bg-light  static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="https://www.svgrepo.com/show/67989/university.svg" alt="..." height="36" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
</>
    );
}

export default Navbar;
