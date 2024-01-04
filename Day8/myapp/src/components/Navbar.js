import { useRef, useState } from 'react'
import '../Assets/css/style.css'

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const email = useRef(null);
    const password = useRef(null);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const Login = (e) => {
        e.preventDefault();
        const data = {
            email: email.current.value,
            password: password.current.value
        };

        if (data.email.length === 0) {
            setErrors({ ...errors, email: 'email is empty!' });
        } else if (data.email.length < 6) {
            setErrors({ ...errors, email: 'min 5 chars!' });
        } else if (!emailRegex.test(data.email)) {
            setErrors({ ...errors, email: 'Invalid email format' });
        } else {
            setErrors({ ...errors, email: '' });
        }

        email.current.value = '';
        password.current.value = '';
    };

    const toggle = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <div className="navbar">
                <div className="navtitle">
                    Hello world
                </div>
                <ul className="navlinks">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li onClick={toggle}>
                        Login
                    </li>
                </ul>
            </div>
            {visible ? (
                <div className='card-wrapper'>
                    <div className="">
                        <h2 className="auth-title">Login</h2>
                        <form className="auth-container h-30v shadow" onSubmit={Login}>
                            <input type="text" name="" id="email" placeholder="Username" className="auth-input" ref={email} required />
                            <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={password} required/>
                            <span className='btn-container'>
                                <input type="submit" value="Login" className="auth-btn w-50" />
                                <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                            </span>
                        </form>
                    </div>
                </div>
            ) : ('')}
        </div>
    );
}

export default NavBar;