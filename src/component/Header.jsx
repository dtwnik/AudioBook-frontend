import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isAuth, setIsAuth] = useState(false)
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    let timerId;

    const checkY = () => {
      if (window.scrollY > 0) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    const trottleFunction = (delay) => {
      if (timerId) {
        return;
      }
      timerId = setTimeout(function () {
        checkY();
        timerId = undefined;
      }, delay);
    };
    useEffect(() => {
      const id = localStorage.getItem("id")
      const login = localStorage.getItem("username")
      setUsername(login)
      if (id && login) {
        setIsAuth(true)
      }
      window.addEventListener("scroll", trottleFunction);
      return () => {
        window.removeEventListener("scroll", trottleFunction);
      };
    }, []);

    const Logout = () => {
        const isSure = window.confirm("Вы уверены?")
        if (isSure) {
          localStorage.removeItem("id")
          localStorage.removeItem("username")
          localStorage.removeItem("token")
          setIsAuth(false)
          setUsername("")
          navigate('/')
        }
    }
    return (
        <>
      <header className={isActive ? 'shadow' : ''}>
        <div className='logoimg'>
        <a href="/" class="logo">
          <img src={logo} height='45px' width='150px' />
        
        </a>
        </div>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="navbar">
          <li><a href="/#home" class="navitem">Басты бет</a></li>
          <li><a href="/#new" class="navitem">Жаңа топтама</a></li>
          <li><a href="/#all" class="navitem">Барлық аудиокітаптар</a></li>
          <li><Link to={'/search/'} class="navitem">Кітап іздеу</Link></li>
        </ul>
        <ul className='ulauth'>
          {isAuth ? <div className='dropdown'>
            <div className='dropbtn'>{username}</div>
            <div className='dropdown-content'>
              <Link to={'/wishlist/'} className="ssylki">Менің таңдаулыларым</Link>
              <div onClick={Logout} className="ssylki">Шығу</div>
            </div>
          </div> :
            <><Link to={'/login/'} className="btn">Кіру</Link>
              <Link to={'/register/'} class="btn register">Тіркелу</Link></>}
        </ul>
      </header>
    </>
    );
}

export default Header;