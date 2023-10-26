import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import authroutes from "./routes/authroutes.js";
import appointmentment from "./routes/appointment.js";


const app = express();
const router = express.Router();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const connect = () =>{
    console.log("waiting for the Db")
    mongoose.connect('mongodb://localhost:27017/').then(()=>{
        console.log("Database connected")
    }).catch(err => {throw err})
}

app.get('/', (req, res) => {
    res.send('Health Kart Api BRO! Up and Running');
});

app.use('/api/auth',authroutes );

app.use('/api/book', appointmentment);


app.listen(3000, () => {
    connect()
    console.log('listening on port ' + PORT + '...');
});

