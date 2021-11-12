import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';

function LoginForm() {
    const [isSubmitSuccess, setIsSubmitSuccesse] = useState(false);
    const [firstName, setFirstName] = useState({ value: "" });
    const [lastName, setLastName] = useState({ value: "" });
    const [email, setEmail] = useState({ value: "" });
    const [password, setPassword] = useState({ value: "" });
    const [contact, setContact] = useState({ value: "" });

    const setterMap = {
        firstName: setFirstName,
        lastName: setLastName,
        email: setEmail,
        password: setPassword,
        contact: setContact,
    }
    const updateField = (event) => {
        setterMap[event.target.id]({ value: event.target.value, isError: !event.target.value });
    }
    const handelRegister = (e) => {
        let isError = false;
        e.preventDefault();
        if (!firstName.value.trim()) {
            isError = true;
            setFirstName({ value: "", isError: true })
        } if (!email.value.trim()) {
            isError = true;
            setEmail({ value: "", isError: true })
        } if (!password.value.trim()) {
            isError = true;
            setPassword({ value: "", isError: true })
        } if (!lastName.value.trim()) {
            isError = true;
            setLastName({ value: "", isError: true })
        } if (!contact.value.trim()) {
            isError = true;
            setContact({ value: "", isError: true })
        }
       if(!isError) {
            alert("registered");
            setIsSubmitSuccesse(true);
        }
    }
    return (
        <form className="register-form" onSubmit={handelRegister} onChange={updateField}>
            <FormControl>
                <InputLabel htmlFor="firstName">First Name *</InputLabel>
                <Input autoFocus id="firstName" aria-describedby="Enter First Name" value={firstName.value} />
                {firstName.isError && <FormHelperText error>required</FormHelperText>}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="lastName">Last Name *</InputLabel>
                <Input id="lastName" aria-describedby="Enter Last Name" value={lastName.value} />
                {lastName.isError && <FormHelperText error>required</FormHelperText>}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email">Email *</InputLabel>
                <Input id="email" aria-describedby="Enter Email" value={email.value} />
                {email.isError && <FormHelperText error>required</FormHelperText>}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="password">Password *</InputLabel>
                <Input type="password" id="password" aria-describedby="Enter Password" value={password.value} />
                {password.isError && <FormHelperText error>required</FormHelperText>}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="contact">Contact No. *</InputLabel>
                <Input id="contact" type="number" aria-describedby="Enter Contact No." value={contact.value} />
                {contact.isError && <FormHelperText error>required</FormHelperText>}
            </FormControl>
            {isSubmitSuccess && <div>Registration Successful, please login!</div>}
            <Button type="submit" variant="contained">Register</Button>
        </form>

    )
}

export default LoginForm
