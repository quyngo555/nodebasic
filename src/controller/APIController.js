import pool from '../configs/connectDB.js'

let getAllUsers = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    console.log('check request', req.body);
    let { fname, lname, email, address } = req.body

    if (!fname || !lname || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute(`insert into users(firstName, lastName, email, address) values(?, ?, ?, ?)`,
        [fname, lname, email, address]);
    return res.status(200).json({
        message: 'ok'
    })
}
let updateUser = async (req, res) => {
    let { fname, lname, email, address, id } = req.body
    if (!fname || !lname || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?',
        [fname, lname, email, address, id])
    return res.status(200).json({
        message: "ok"
    })
}
let deleteUser = async (req, res) => {
    let userId = req.params.id
    if (!userId) {
        res.status(200).json({
            message: "missing required params"
        })
    }
    await pool.execute('delete from users where id = ?', [userId])
    return res.status(200).json({
        message: "ok"
    })
}
export { getAllUsers, createNewUser, updateUser, deleteUser }