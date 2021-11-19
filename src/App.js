
import './App.css';
// import * as Bootstrap from 'bootstrap'
// import $ from 'jquery';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Addproduct from "./products/productadd"
import Home from "./home"
import Users from "./users/user";


export default function App() {
 var localname = window.location.pathname
 localname = localname.split('/')[1]
  // console.log()
     if(localname){
       
     }
  return (
    <Router>
    <div className="App">
      <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <div className="container-fluid">
<header>
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <a
          href="/"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </a>
        <a href="/users" className="list-group-item list-group-item-action py-2 ripple active">
          <i className="fas fa-chart-area fa-fw me-3"></i><span>User</span>
        </a>
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-lock fa-fw me-3"></i><span>Groups</span></a
        >
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-chart-line fa-fw me-3"></i><span>Brand</span></a
        >
        <a href="/" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-pie fa-fw me-3"></i><span>Category</span>
        </a>
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Stores</span></a
        >
        <a href="/addproduct"  className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-globe fa-fw me-3"></i><span>Product Add</span></a
        >
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-globe fa-fw me-3"></i><span>Management</span></a
        >
        
       
      
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-calendar fa-fw me-3"></i><span>Others</span></a
        >
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-users fa-fw me-3"></i><span>Reports</span></a
        >
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-money-bill fa-fw me-3"></i><span>Company</span></a
        >
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-money-bill fa-fw me-3"></i><span>Profile</span></a
        >
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-money-bill fa-fw me-3"></i><span>Settings</span></a
        >
        <a href="/" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-money-bill fa-fw me-3"></i><span>Logout</span></a
        >
      </div>
    </div>
  </nav>
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
   
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      <a className="navbar-brand" href="/">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
          height="25"
          alt=""
          loading="lazy"
        />
      </a>
      <form className="d-none d-md-flex input-group w-auto my-auto">
        <input autocomplete="off"
          type="search"
          className="form-control rounded" />
        <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
      </form>

      <ul className="navbar-nav ms-auto d-flex flex-row">
        <li className="nav-item dropdown">
          <a
            className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
            href="/"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="/">Some news</a>
            </li>
            <li>
              <a className="dropdown-item" href="/">Another news</a>
            </li>
            <li>
              <a className="dropdown-item" href="/">Something else here</a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link me-3 me-lg-0" href="/">
            <i className="fas fa-fill-drip"></i>
          </a>
        </li>
        <li className="nav-item me-3 me-lg-0">
          <a className="nav-link" href="/">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
            href="/"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="united kingdom flag m-0"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="/"
                ><i className="united kingdom flag"></i>English
                <i className="fa fa-check text-success ms-2"></i
              ></a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <a className="dropdown-item" href="/"><i className="poland flag"></i>Polski</a>
            </li>
            <li>
              <a className="dropdown-item" href="/"><i className="china flag"></i>中文</a>
            </li>
            <li>
              <a className="dropdown-item" href="/"><i className="japan flag"></i>日本語</a>
            </li>
            <li>
              <a className="dropdown-item" href="/"><i className="germany flag"></i>Deutsch</a>
            </li>
            <li>
              <a className="dropdown-item" href="/"><i className="france flag"></i>Français</a>
            </li>
            <li>
              <a className="dropdown-item" href="/"><i className="spain flag"></i>Español</a>
            </li>
            <li>
              <a className="dropdown-item" href="/"><i className="russia flag"></i>Русский</a>
            </li>
            <li>
              <a className="dropdown-item" href="/"><i className="portugal flag"></i>Português</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
            href="/"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
              className="rounded-circle"
              height="22"
              alt=""
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="/">My profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="/">Settings</a>
            </li>
            <li>
              <a className="dropdown-item" href="/">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>
<main >
  <div className="container pt-4"></div>
</main>


<Switch>

          <Route path="/addproduct">
            <Addproduct />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>    

      </div>
  
    </div>

  
    </Router>
    
    
  );
  
}




