import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={loginUser} className='login-form'>
        <div className='login-title'>Log In</div>
        <div className='login-id'>
          <label htmlFor="id">ID</label>
          <input type="text" id='id' placeholder='아이디를 입력하세요'/>
        </div>
        <div className='login-pw'>
          <label htmlFor="pw">PASSWORD</label>
          <input type="password" id='pw' placeholder='비밀번호를 입력하세요'/>
        </div>
        <button>Log in</button>
      </form>
    </div>
  )
}

export default Login