import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import React from 'react';
import './Form.css';

function LoginForm({handelLoginSuccess}) {
    const handleLogin = (e) => {
        e.preventDefault();
        handelLoginSuccess();
    }
    return (
        <form className="login-form" onSubmit={handleLogin}>
            <FormControl>
                <InputLabel htmlFor="username">Username *</InputLabel>
                <Input required id="username" aria-describedby="Enter Username" />
                <FormHelperText error></FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="password">Password *</InputLabel>
                <Input required type="password" id="password" aria-describedby="Enter password" />
            </FormControl>
            <Button type="submit" variant="contained">Login</Button>
        </form>

    )
}

export default LoginForm;
