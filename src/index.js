const express = require('express');

const UserRouter = require('./routes/users');
const MiddlewareUsers = require('./middleware/logs')



const app = express();

// app.use("/", (req, res, next) => {
//     res.send("js kon");
// })


// middleware bisa berulang ulang kali
app.use(MiddlewareUsers);
// untuk menampilkan data pada console log
app.use(express.json());


// mengambil dari controller user.js
app.use('/users', UserRouter);


















// api tidak menggunakan router
app.get("/", (req, res) => {
    res.json({
        nama: "Shodiq",
        email: "Nopal@gmail.com"
    })
});

app.post("/", (req, res) => {
    res.send("POST API")
});
app.listen(4000, () => {
    console.log('server berhasil dirunning')
})