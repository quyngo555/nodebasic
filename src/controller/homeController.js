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
export { getHomepage, getDetailPage, createNewUser }