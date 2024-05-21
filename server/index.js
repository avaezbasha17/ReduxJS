import express from 'express'
import db from 'mysql'
import cros from 'cors'
import bodyParser from 'body-parser'

let app = express()

let connection = db.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tibil"
})

app.use(cros())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/getStudent", (req, res) => {
    connection.query('SELECT * FROM student', (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    })
})

app.post("/addStudent",(req,res)=>{
    console.log(req.body);
    let {name,grade,medium,section} = req.body
    connection.query(`INSERT INTO student (name,grade,medium,section) values (?,?,?,?)`,[name,grade,medium,section],(err,result)=>{
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(result)
    })
})

app.get("/studentChange", (req, res) => {
    connection.query(`SELECT * FROM student WHERE grade = ? AND medium = ? AND section = ?`, [req.query.grade, req.query.medium, req.query.section], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    })
})

app.get("/getByName", (req, res) => {
    connection.query(`SELECT * FROM student WHERE name like ?`, [`%${req.query.name}%`], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(result)
    })
})

app.get("/findById",(req,res)=>{
    connection.query(`SELECT * FROM student WHERE id = ?`,[req.query.id],(err,result)=>{
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(result)
        console.log(result);
    })
})

app.post("/updateStudent",(req,res)=>{
    let {id,name,grade,medium,section} = req.body
    connection.query(`UPDATE student SET name = ?, grade = ?, medium = ?, section = ? WHERE id = ?`,[name,grade,medium,section,id],(err,result)=>{
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(result)
    })
})

app.get("/deleteStudent",(req,res)=>{
    connection.query('DELETE FROM student WHERE id = ?',[req.query.id],(err,result)=>{
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(result)
    })
})

app.listen(4002, () => { console.log("Server is up in 4002"); })