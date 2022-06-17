import '../css/LoginPage.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const postAuth = async(e)=> {
        e.preventDefault()
        if (username !== "" && password !== "") {
            try {
                const data = await axios.post(
                    'https://kitapplay-backend.herokuapp.com/api/auth/',
                    { username: username, password: password }
                )
                console.log(data)
                alert("Вы успешно авторизовались")
                localStorage.setItem("id", data.data.id)
                localStorage.setItem("username", username)
                localStorage.setItem("token", data.data.token)
                navigate('/')
            }
            catch (e) {
                alert("Имя пользователя или пароль введен неправильно")
            }
        }
    }
    return (
        <div className='authbg'>
        
            <div className='regCon'>
                <div className='authForm'>
                    <form action='' className='form'>
                        <h2>Кіру</h2>
                        <input type="text" name='username' class="field" placeholder='Пайланушы атын енгізіңіз' onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="password" name='password' className='field' placeholder='Құпия сөзді енгізіңіз' onChange={(e) => setPassword(e.target.value)}></input>
                        <input type="submit" value="Кіру" id='submit' onClick={postAuth}></input>
                        <Link to={"/register/"} className="link">Тіркелу</Link>
                    </form>
                </div>
                <div className='authImg'></div>
            </div>
        </div>
    );
}

export default LoginPage;