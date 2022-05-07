import pool from '../configs/connectDB.js'

let getHomepage = async (req, res) => {
    //logic
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    let check = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows })

}
let getDetailPage = async (req, res) => {
    let userId = req.params.id
    let user = await pool.execute(`select * from users where id = ?`, [userId])

    return res.send(JSON.stringify(user[0]))
}
let createNewUser = async (req, res) => {
    console.log('check request', req.body);
    let { fname, lname, email, address } = req.body
    await pool.execute(`insert into users(firstName, lastName, email, address) values(?, ?, ?, ?)`,
        [fname, lname, email, address]);
    return res.redirect('/')
}
let deleteUser = async (req, res) => {
    let userId = req.body.userId

    await pool.execute('delete from users where id = ?', [userId])
    return res.redirect('/')

}
let getEditPage = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute('Select * from users where id = ?', [id]);
    return res.render('update.ejs', { dataUser: user[0] })
}
let postUpdateUser = async (req, res) => {
    let { fname, lname, email, address, id } = req.body
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?',
        [fname, lname, email, address, id])
    return res.redirect('/')

}
export { getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser }