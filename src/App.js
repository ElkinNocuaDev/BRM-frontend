import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserLogin from './components/UserLogin';

class App extends React.Component {
  //set the state default value
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      successMessage: '',
    };

    this.state = {login: 'show col-lg-6 px-lg-4', register: 'hide'};
  }
  showlogin= () => { //button click functionality
  
    this.setState({login: 'show col-lg-6 px-lg-4'});
    this.setState({register: 'hide'});
  }

  showregister= () => { //button click functionality
  
    this.setState({login: 'hide'});
    this.setState({register: 'show col-lg-6 px-lg-4'});
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Crea una instancia de UserLogin
    const userLogin = new UserLogin();

    // Llama a la función handleLogin en la instancia
    userLogin.handleLogin(email, password);
  };

  handleRegisterSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Crea una instancia de UserLogin
    const userLogin = new UserLogin();

    // Llama a la función handleRegister en la instancia
    userLogin.handleRegister(username, email, password);
  };

  render() {
   
    return (

    <div className="App">

     <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
      <div className="container">
        <div className="row align-items-center">
          <div className={this.state.login}>
            <div className="card">
              <div className="card-header px-lg-5">
                <div className="card-heading text-primary">Jassa Login</div>
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-4">Hi, welcome back! ??</h3>
                <p className="text-muted text-sm mb-5">Please enter your credentials to access your account.</p>
                <form id="loginForm" onSubmit={this.handleLoginSubmit}>
                  <div className="form-floating mb-3">
                    <input className="form-control" name="email" id="floatingInput" type="email" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" name="password" id="floatingPassword" type="password" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                    <label className="form-check-label" for="remember">Remember me</label>
                  </div>
                  <button className="btn btn-primary" type="submit">Login</button>
                  
                  <div className="text-danger">{this.state.errorMessage}</div>
                  <div className="text-success">{this.state.successMessage}</div>

                </form>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Don't have an account? <a onClick={this.showregister}>Register</a>.</div>
              </div>
            </div>
          </div>
          {/*} register {*/}
           <div className={this.state.register}>
            <div className="card">
              <div className="card-header px-lg-5">
                <div className="card-heading text-primary">Jassa Register</div>
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-4">Get started with Jassa</h3>
                <p className="text-muted text-sm mb-5">Sign up and join our community today! Fill in the form below to create your account and explore all the features.</p>
                <form onSubmit={this.handleRegisterSubmit}>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="username" type="email" placeholder="name@example.com" required />
                    <label for="username">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="agree" id="agree" />
                    <label className="form-check-label" for="agree">I agree with the <a href="#">Terms & Conditions</a>.</label>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" id="regidter" type="button" name="registerSubmit">Register</button>
                  </div>
                </form>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Already have an account? <a onClick={this.showlogin} >Login</a>.</div>
              </div>
            </div>
          </div>
         <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img className="img-fluid mb-4" width="300" src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png" alt="" style={{transform: "rotate(10deg)"}} />
            <h1 className="mb-4">Inventory <br className="d-none d-lg-inline" />Managment.</h1>
            <p className="lead text-muted">Easy admin for your products!</p>
          </div>
        </div>
      </div>
    </div>
    </div>
)
};
}

export default App;
