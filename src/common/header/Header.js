import React, { useState } from 'react';
import "./Header.css";
import logo from "../../assets/logo.svg";
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import BasicTabs from '../basicTabs/BasicTabs';
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm';
import { useHistory, useRouteMatch } from "react-router-dom";

Modal.setAppElement('#root');

function Header() {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    const match = useRouteMatch("/movie/:id");
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
const redirectToHome = () => {
    history.push("/")
}
    const contents = [{ content: <LoginForm/>, label: "Login" },
    { content: <RegisterForm />, label: "Register" }]
    return (
        <header className="header">
            <div className="header__logo" onClick={redirectToHome}>
                <img src={logo} alt="logo" />
            </div>
            <div className="header__buttons">
            {!!match && <Button onClick={()=> history.push("/bookmovie/"+match.params.id)} className="header__book-show-button" variant="contained" color="primary">Book Show</Button>}
                {isLoggedIn ?
                    <Button onClick={handleClick} variant="contained">Logout</Button> :
                    <Button onClick={handleClick} variant="contained">Login</Button>}
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
