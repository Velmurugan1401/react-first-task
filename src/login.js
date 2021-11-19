

import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./login.css";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory
  } from "react-router-dom";
// import s from "./s"
import reportWebVitals from './reportWebVitals';
import Modal from "react-bootstrap/Modal";
import App from './App';
import UserProfile from './session';




var userFound = false

function  Login() {
           
        userFound=sessionStorage.getItem('state');
       
        if(userFound){
            mainpage()
        }
          
      
   
         

    return (
      
      <div className="container-fluid h-100">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>

          <div className="row h-100">
          <div className="col-6 images">
            </div>
            <div className="col-6">
                  <div className="w-50 m-auto" id="loginform">
                  <Router>
                    <Switch>
                    
                    <Route path = "/signup" component = {Signupform} />
                    <Route path = "/" component = {siginform} />
                    </Switch>
                    </Router>
                  
                  </div>
          </div>
          </div>
      </div>
      
 
    )
    
 
  
}


function mainpage() {

    ReactDOM.render( 
    
<React.StrictMode >
    
    <App />

</React.StrictMode>,
document.getElementById('root')
);
}

class Signupform extends React.Component{
    constructor() {
        super();
        this.state = {
            nameValue: '',
            email: '',
            password:''
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.showValue = this.showValue.bind(this);
    }
    onChangeName(event) {
        this.setState({
            nameValue:event.target.value
        });

    }
    email(event) {
        this.setState({
            email: event.target.value
        });
    }
    password(event) {
        this.setState({
            password: event.target.value
        });
    }
    showValue(){

        
        var inobj={
                name:this.state.nameValue,
                email:this.state.email,
                password:this.state.password
        }

        const header=new Headers({'Content-Type':'application/json'});
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify(inobj)
        };
        fetch('http://localhost:7000/api/adduser',requestOptions)
            .then(response => console.log(response.json()))
    }
    render(){
        return(
            <form >
                <h3 className="mb-5">Sign up</h3>
            <div className="form-group ">
            <label>Name</label>
            <input type="text" className="form-control mt-1" placeholder="Name" onChange={this.onChangeName.bind(this)} />
            </div>
            <div className="form-group mt-2">
            <label>Email Id</label>
            <input type="email" className="form-control" placeholder="emable@gmail.com" onChange={this.email.bind(this)} />
            </div>
            <div className="form-group mt-2">
            <label>Phone Number</label>
            <input type="text" className="form-control mt-1" placeholder="996288823" />
            </div>
            <div className="form-group mt-2">
            <label>Password</label>
            <input type="text" className="form-control mt-1" placeholder="" onChange={this.password.bind(this)} />
            </div>
            <div className="form-group mt-2">
               <button type="button" onClick={this.showValue}  className="btn btn-primary  w-100">Sign up</button>
    
              </div>
              <p className="forgot-password text-end mt-2">
                        Already registered ? <a href="/" >log in</a>
              </p>
        </form>
        )
    }
    
    }
    
class siginform extends React.Component {

//      constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {    this.setState({value: event.target.value});  }
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
 
    constructor() {
        super();
        this.state = {
            email: '',
            password:''
        }
      
        // this.onChangeName = this.onChangeName.bind(this);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.loginuser = this.loginuser.bind(this);
    }

    email(event) {
        this.setState({
            email: event.target.value
        });
    }
    password(event) {
        this.setState({
            password: event.target.value
        });
    }

    loginuser(){
        // getdata()
        var userobj={
             email:this.state.email,
             password:this.state.password
        }
        const header=new Headers({'Content-Type':'application/json'});
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify(userobj)
        };
        fetch('http://localhost:7000/api/login',requestOptions)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            UserProfile.setName(response)
            if(response.status){
                UserProfile.setState(true)
                window.sessionStorage.setItem("Session", response.result);
                window.sessionStorage.setItem("state", response.status);
                mainpage()
                
            }
            
            // console.log(response)
        
        })
            
        //   console.log(userobj)
    }

        render(){
            return(
                <form >

                <h3 className="mb-5">Log in</h3>

                <div className="form-group mt-2">
                    <label>Email</label>
                    <input type="email" onChange={this.email.bind(this) } value={this.state.email} className="form-control mt-2" placeholder="Enter email" />
                </div>

                <div className="form-group mt-2">
                    <label>Password</label>
                    <input type="password" onChange={this.password.bind(this)} value={this.state.password} className="form-control mt-2" placeholder="Enter password" />
                </div>

                <div className="form-group mt-2">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="form-group mt-2">
                <button type="button" className="btn btn-primary  w-100" onClick={this.loginuser} >Sign in</button>

                </div>
                <small className="mt-3">Do not have an account ? <a href="/signup" >Sign up</a></small>
                <p className="forgot-password text-right mt-1">
                    Forgot <a href="/">password?</a>
                </p>
                </form>
            )
        }
    }
    
    
 reportWebVitals()
 export default Login;


//  function getdata() {
//     fetch('http://localhost:7000/api/listusers')
//         .then(async response => {

//             const data = await response.json();
//             console.log(data)
//             if (!response.ok) {
//                 const error = (data && data.message) || response.statusText;
//                 return Promise.reject(error);
//             }
//             // tabledata = data
//             return data
//         })
//         .catch(error => {
//             console.error('There was an error!', error);
//         });
// }

