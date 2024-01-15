const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://10.0.0.4:27017/emulacao_db", { useNewUrlParser: true, useUnifiedTopology: true });


// Define MongoDB schema for readings
const readingSchema = new mongoose.Schema({
    BaseStation: String,
    Movement: String,
    Temperature: String,
    Timestamp: String,
    Humidity: String,
});

// Define MongoDB model for readings
const ReadingModel = mongoose.model('Reading', readingSchema, 'my_collection');

app.get("/api/data", async (req, res) => {
    try {
        const data = await ReadingModel.find({});
        //console.log(data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post("/tabela", (req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")

            }
        }else{
            res.json("No record exists")
        }
    })
})
app.post("/login", (req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")

            }
        }else{
            res.json("No record exists")
        }
    })
})
app.post('/register', (req, res) => {
    const {name, email, password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user){
            res.json("Email already registred")
        }else{
            EmployeeModel.create(req.body)
            .then(employees => res.json(employees))
            .catch(err => res.json(err));
        }
    })
    
});

app.listen(3001, () => {
    console.log("Server is running");
});
