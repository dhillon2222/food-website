import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='bg-dark'>
    <div className='container'>
      <div className='row'>
       <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            {/* <a className="navbar-brand" href="https://library.livecanvas.com/sections/">
                <img className="img-fluid" src="https://getbootstrap.com/docs/5.1/Linkssets/brand/bootstrap-logo.svg" alt="" width="48px" height="48px" />
            </a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_lc" aria-controls="nav_lc" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav my-3 my-lg-0 ms-lg-3 me-auto ">
                    <li className="nav-item me-4 fw-bold"><Link className="nav-link text-white" to="/">Home</Link></li>
                    <li className="nav-item me-4 fw-bold"><Link className="nav-link text-white" to="/about">About</Link></li>
                    <li className="nav-item me-4 fw-bold"><Link className="nav-link text-white" to="#">Menu</Link></li>
                    <li className="nav-item me-4 fw-bold"><Link className="nav-link text-white" to="#">Cart</Link></li>
                    <li className="nav-item me-4 fw-bold"><Link className="nav-link text-white" to="#">Contact</Link></li>
                </ul>
                <div>
                  <Link className="btn btn-primary me-2" href="#">Log In</Link><Link className="btn btn-primary" href="#">Sign Up</Link></div>
            </div>
        </div>
    </nav>
    </div>
        </div>
        </div>
    </>
  )
}

export default Header