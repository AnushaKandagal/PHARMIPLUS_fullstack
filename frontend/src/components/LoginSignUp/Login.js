import React , {Fragment , useState } from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginAction} from '../../Actions/auth';
import * as emailjs from 'emailjs-com'

emailjs.init("user_eUFUzxSrtsRN0aM6v0680");

const Login = ({loginAction, isAuthenticated}) => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const {email, password} = formData;

    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        loginAction(email,password)
      };

      //if user successfully logged then redirect to required component
    if (isAuthenticated){
      alert('user logged in')
       return <Redirect to ='/home'/>
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form"  onSubmit={e =>onSubmit(e)}>
        <div className="form-group">
          <input type="email" 
          placeholder="Email Address"
           name="email" 
           value={email}
            onChange={e =>onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e =>onChange(e)}
            required
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>

      <a className="my-1" onClick={
        ()=>{
          localStorage.setItem('email',email);
        let res = email.split("@")[0];
        var templateParams = {
          to_name: email,
          message_html: 'Got to this page to set new password http://localhost:3000/changePassword'
        };
        console.log(res);
        emailjs.send('service_sblmtno','template_fdc5zut', templateParams)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
              console.log('FAILED...', error);
        });
      }
      }>
        Forgot password?
      </a>
        </Fragment>
        
    )
}


Login.propTypes={
  loginAction:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
}

const mapSateToProps= state=>({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapSateToProps,{loginAction})(Login)