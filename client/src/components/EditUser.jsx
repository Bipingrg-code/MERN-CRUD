import React from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { editUser, getUser } from '../Service/api'



import { useNavigate, useParams } from 'react-router-dom'

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

const EditUser = () => {
  //store user data in state
  const [user, setUser] = useState(defaultValue)

  //navigate the link when you add user and see the user data into all user
  const navigate = useNavigate();

  //get url id
  const { id } = useParams()

  //fetching data in form
  useEffect(() => {
    loadUserData()
  },[])

  //userDetailsLoad func
  const loadUserData = async () => {
    const response = await getUser(id);
    // console.log(response.data)
    setUser(response.data)
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  //api call
  const editUserDetails = () => {
    editUser(user, id)
    navigate('/all')
  }

  return (
    <Container>
      <Typography veriant="h4">Edit Users</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
      </FormControl>
      <FormControl>
        <Button varient="outlined" onClick={() => editUserDetails()}>Edit User</Button>
      </FormControl>
    </Container>
  )
}

export default EditUser