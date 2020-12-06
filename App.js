import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
 
  handleSubmit(event) {
    var email = document.getElementById("username").value;
    if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) {
      alert("welcome");
    } else {
        alert("Please enter a valid email");
        return false;
    }
  }
  render() {
    return (
      <div className="App">
        <div class="container">
       <div class="d-flex justify-content-center h-100">
       <div class="card">
       <div class="card-header">
       <h3>Sign In</h3>
       </div>
       <div class="card-body">
       <form onSubmit={this.handleSubmit}>
                  <div class="input-group form-group">
       <div class="input-group-prepend">
       <span class="input-group-text"><i class="fas fa-user"></i></span>
       </div>
       <input type="email" id="username" class="form-control" placeholder="email" required value={this.state.value} onChange={this.handleChange} />
       </div>
       <div class="input-group form-group">
       <div class="input-group-prepend">
       <span class="input-group-text"><i class="fas fa-key"></i></span>
       </div>
       <input type="password" id="pwd" class="form-control" placeholder="password" minlength="6" required/>
       </div>
       <div class="row align-items-center remember">
       <input type="checkbox"/>Remember Me
       </div>
       <div class="form-group">
       <input type="submit" value="Login" class="btn float-right login_btn"/>
       </div>
       </form>
       </div>
       <div class="card-footer">
       <div class="d-flex justify-content-center links">
       Don't have an account?<a href="#">Sign Up</a>
       </div>
     <div class="d-flex justify-content-center">
     <a href="#">Forgot your password?</a>
     </div>
     </div>
     </div>
        </div>
        <div class="social_icon">
          <span><i class="fab fa-facebook"></i></span>
          <span><i class="fab fa-twitter"></i></span>
          <span><i class="fab fa-google-plus"></i></span>
        </div>
        </div>
      </div>
    )
  }
}

export default App