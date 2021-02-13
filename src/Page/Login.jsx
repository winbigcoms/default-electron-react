import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart } from '../Redux/modules/loginInfo';

export default function LoginPage(props){

  const dispatch = useDispatch();
  const letsLogin =()=>{
    dispatch(loginStart())
  }
  const loginState= useSelector(state=>state);
  console.log(loginState);
  return (
    <div>
      login
      <button
        onClick={
          ()=>{
            letsLogin();
            props.history.replace("/main");
            console.log(loginState);
          }
        }
      >
        메인으로
      </button>
    </div>
  )
}