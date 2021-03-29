import React, { useEffect, useState } from "react";
import '../Styles/LoginPage.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Auth from './Auth';
export default function LoginPage(){
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  function onChangeUserName(e){
    setName(e.target.value)
  }
  function onChangePassword(e){
    setPassword(e.target.value)
  }
  function submitDetails(){
      axios.get('https://run.mocky.io/v3/7c95876c-2470-47aa-8c69-ac5aee95f6af').then((res)=>{
      let isPresent =res && res.data.some(function(el){
      return el.userName === name && el.password === password
      })
      if(isPresent){
        let index = res.data.findIndex((x)=>x.userName === name && x.password === password)
        dispatch({ type:"Login", data: true})
        dispatch({ type:"Login User Details", data: res.data[index]})
        history.push('/dashboard')
      } 
      else{
          alert('Please check your username or password!')
      }
    })
  }
return(
<div className="login-mail-div">
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <h1 class='text-white text-center'>Login</h1>
              <div class="form-login"><br></br>
                <h4>Secure Login</h4>
                <br></br>
                <input type="text" id="userName" onChange={(e)=>onChangeUserName(e)} class="form-control input-sm chat-input" placeholder="username"/>
                <br></br>
                <input type="password" id="userPassword" onChange={(e)=>onChangePassword(e)} class="form-control input-sm chat-input" placeholder="password"/>
                <br></br>
                <div class="wrapper">
                        <span class="group-btn" onClick={()=> Auth.login(()=>{submitDetails()})} >
                            <a href="#" class="btn btn-danger btn-md">login <i class="fa fa-sign-in"></i></a>
                        </span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
} 