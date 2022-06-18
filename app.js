const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mydb'
const app = express();
const PORT = 9000;

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection
con.on('open', function () {
    console.log('Database connected....')
})
app.use(express.json())
const router = require('./router/route');
app.use('/route', router);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log('Server is listening in port', PORT);
});