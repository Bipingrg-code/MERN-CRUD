import axios from 'axios'

const URL = 'http://localhost:8000';

//post data
export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log('Error while calling add user API', error)
    }
}

//get data
export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log('Error while calling get users API', error)
    }
}

//get sinlge user data for edit

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling get user API', error)
    }
}

//edit user data
export const editUser = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`, user)
    } catch (error) {
        console.log('Error while calling edit user API', error)
    }
}

//delete user
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling dalete user API', error)
    }
}
