const UsersModel = require('../models/usersModel');

const getAllUsers = async (req,res) => {
    
    const [data] = await UsersModel.getAllUsers();

    res.json({
        message: 'GET all users succes',
        data: data,
    })
}


// membuat users
const createUsers = (req,res) => {
    // untuk menampilkan data json di body postmant
    console.log(req.body)
    res.json({
        message: 'CREATE users succes',
        data: req.body,
    })
}

const UpdateUser = (req,res) => {
    const {id} = req.params
    console.log('id: ', id);
    res.json({
        message: 'UPDATE user succes',
        data: req.body
    })
}


const DeleteUser = (req,res) => {
    const {id} = req.params
    res.json({
        message: 'DELETE user succes',
        data: {
            id: id,
            name: "naufal",
            gmail: "naufal@gmail.com",
            province: "Jawa Barat",
        }
    })
}
module.exports = {
    getAllUsers,
    createUsers,
    UpdateUser,
    DeleteUser,
}