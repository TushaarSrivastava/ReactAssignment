import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import React from 'react';
import './Form.css';

function LoginForm() {
    const handleLogin = (e) => {
        e.preventDefault();
        alert("loogged in")
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
