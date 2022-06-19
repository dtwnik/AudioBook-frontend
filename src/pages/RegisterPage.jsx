import '../css/LoginPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const RegisterPage = () => {
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
                alert("Сіз сәтті авторизацияландыңыз")
                localStorage.setItem("id", data.data.id)
                localStorage.setItem("username", username)
                localStorage.setItem("token", data.data.token)
                navigate('/')
            }
            catch (e) {
                alert("Пайдаланушы аты немесе құпия сөз дұрыс енгізілмеген")
            }
        }
    }
    return (
        <>
            <div className='regCon'>
                <div className='authImg'></div>
                <div className='authForm'>
                    <form action='' className='form'>
                        <h2>Тіркелу</h2>
                        <input type="text" name='username' class="field" placeholder='Пайланушы атын енгізіңіз' onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="password" name='password' className='field' placeholder='Құпия сөзді енгізіңіз' onChange={(e) => setPassword(e.target.value)}></input>
                        <input type="submit" value="Тіркелу" id='submit' onClick={postAuth}></input>
                        <Link to={"/login/"} className="link">Кіру</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;