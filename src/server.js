const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://elnino:elnino@cluster0-dcd07.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex :  true ,
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

require('./controllers/AuthController')(app);
app.use(require('./routes'));

app.listen(process.env.PORT || 4001);