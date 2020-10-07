const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')
const cors = require('cors')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://yisus:yisus123@cluster0.bkiaw.mongodb.net/employees?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useFindAndModify: false
});

app.set('port', process.env.PORT || 4000)

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// /Routes
app.use('/api/', routes());

app.listen(app.get('port'), () =>{
    console.log('On port', app.get('port'));
})