import React , {Fragment , useState } from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginAction} from '../../Actions/auth';
import axios from 'axios';

const Repass = ({loginAction, isAuthenticated}) => {

    const [pass1,changePass1] =useState("");


    return (
        <Fragment>
            <form className="form" >
                Enter new password:
                <input type="password" onChange={(event)=>changePass1(event.target.value)}/>
                <button onClick={
                    ()=>{
                     axios.post('http://localhost:5000/api/passwordupdate',{
                        userID : localStorage.getItem('email'),
                        newpass : pass1 }
                        )
                        window.location.href = "http://localhost:3000/login";
                }}>Change Password</button>    
            </form>

        </Fragment>
        
    )

}

export default Repass;