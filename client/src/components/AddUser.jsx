import React from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import { useState } from 'react'
import { addUser } from '../Service/api'

import { useNavigate } from 'react-router-dom'

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px;
  }
`
const defaultValue = {
  name: '',
  username: '',
  email: '',
  phone: '',
}

const AddUser = () => {
  //store user data in state
  const [user, setUser] = useState(defaultValue)

  //navigate the link when you add user and see the user data into all user
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  //api call
  const addUserDetails = () => {
    addUser(user)
    navigate('/all')
  }

  return (
    <Container>
      <Typography veriant="h4">Add Users</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button varient="outlined" onClick={() => addUserDetails()}>Add User</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser