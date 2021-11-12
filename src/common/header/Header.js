import React, {useState} from 'react';
import "./Header.css";
import logo from "../../assets/logo.svg";
import Button from '@mui/material/Button';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__login-button">
                {isLoggedIn ?
                    <Button onClick={handleClick} variant="contained">Logout</Button> :
                    <Button onClick={handleClick} variant="contained">Login</Button>}
            </div>
        </header>
    )
}

export default Header
