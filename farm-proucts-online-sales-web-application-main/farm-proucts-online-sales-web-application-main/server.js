const {connectdb} = require('./connect');
const {Books} = require('./schema');
const books_controller = require('./controller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());


connectdb()
    .then(()=>{
        console.log("database connected successfullyy..!!!!!")
    })
    .catch((err)=>{
        console.log(err)
    });


app.post('/api/dgh',books_controller.insertbook);
    
const port = 9000;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})