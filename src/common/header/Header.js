import React, { useState } from 'react';
import "./Header.css";
import logo from "../../assets/logo.svg";
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import BasicTabs from '../basicTabs/BasicTabs';
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm';
Modal.setAppElement('#root');

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const contents = [{ content: <LoginForm/>, label: "Login" },
    { content: <RegisterForm />, label: "Register" }]
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__buttons">
                {isLoggedIn ?
                    <Button onClick={handleClick} variant="contained">Logout</Button> :
                    <Button onClick={handleClick} variant="contained">Login</Button>}
                    <Button onClick={handleClick} variant="contained">Book Show</Button>
            </div>

            <Modal
                isOpen={isLoggedIn}
                onRequestClose={handleClick}
                style={customStyles}
                contentLabel="login register modall"
            >
                <BasicTabs contents={contents} />
            </Modal>
        </header>
    )
}

export default Header;
