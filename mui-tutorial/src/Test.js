import React, { useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Toolbar, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { AppBar } from '@mui/material'
import { Tabs, Tab } from '@mui/material'



const Test = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        subscribe: false,
        age: 0,
        gender: ""
    });
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }
    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    type='text'
                    sx={{ margin: 3 }}
                    label='Name'
                    placeholder='Abarajamelabañera'
                    variant='outlined' />

                <TextField
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    type='email'
                    sx={{ margin: 3 }}
                    label='Email'
                    placeholder='Abarajamelabañera'
                    variant='standard' />

                <TextField
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                    type='password'
                    sx={{ margin: 3 }}
                    label='Password'
                    placeholder='Password'
                    variant='filled' />

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() =>
                                    setInputs((prev) => ({
                                        ...prev,
                                        subscribe: !inputs.subscribe,
                                    }))
                                }
                            />}
                        label="Subscribe" />
                </FormGroup>

                <FormControl fullWidth>
                    <InputLabel>Age</InputLabel>
                    <Select
                        name="age"
                        value={inputs.age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        onChange={handleChange}
                        name="gender"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <Button type='submit' variant='contained' color='success'>Submit</Button>
            </form>
        </div>
    )
}

export default Test;