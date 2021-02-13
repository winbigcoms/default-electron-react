import React from 'react';

export default function MainPage (props){
  return (
    <div>
      Mainpage
      <button
        onClick={
          ()=>{
            console.log(props);
            props.history.replace('/')
          }
        }
      >
        로그인으로
      </button>
    </div>
  )
}