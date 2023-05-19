import User from '../model/user-model.js'

export const addUsers = async (req, res) => {
    const user = req.body;
    //console.log(user)
    const newUser = new User(user)
    try {
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ massege: error.massege })
    }
}