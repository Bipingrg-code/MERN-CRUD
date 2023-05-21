import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from "@mui/material"
import { useEffect, useState } from 'react'
import { getUsers, deleteUser } from "../Service/api"
import { Link } from 'react-router-dom'


const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`
const Thead = styled(TableRow)`
  background = #000;
`
const AllUser = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUser()
  }, [])

  const getAllUser = async () => {
    // console.log("hello")
    let response = await getUsers();
    // console.log(response.data)
    setUsers(response.data)
  }

  //delete user
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUser(); 
  }
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TableRow key={user._id}>
              <TableCell>
                {user._id}
              </TableCell>
              <TableCell>
                {user.name}
              </TableCell>
              <TableCell>
                {user.username}
              </TableCell>
              <TableCell>
                {user.email}
              </TableCell>
              <TableCell>
                {user.phone}
              </TableCell>
              <TableCell>
                <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}> Delete</Button>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUser