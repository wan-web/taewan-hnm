import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['여성', '남성', 'Devided', '신생아/유아', '아동', 'H&M Home', '지속가능성', 'sales'];
  const navigate = useNavigate();
  const goToLogin = () => {
    if(authenticate===false) {
      navigate('/login');
    }else {
      navigate('/');
      setAuthenticate(false);
    }
  }
  const search = (e) => {
    if(e.code !== 'Enter') return;
    let keyword = e.target.value;
    //url을 바꿔준다
    navigate(`?q=${keyword}`);
  }
  const [showSide, setShowSide] = useState(false);
 
  return (
    <div>
      <div className={`side-menu ${showSide}`}>
        <div className='side-btn' onClick={() => {
          setShowSide(!showSide);
        }}>
          <FontAwesomeIcon icon={showSide ? faXmark :faBars} />
        </div>
        <ul className='side-list'>
          {
            menuList.map( (item ,index) => <li key={index}>{item}</li>)
          }
        </ul>
      </div>
      <div>
        <div className='login-btn' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className='nav-section'>
        <Link to='/'><img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="" /></Link>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {
            menuList.map( (item ,index) => <li key={index}>{item}</li>)
          }
        </ul>
        <div className='search-area'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" onKeyDown={search}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar