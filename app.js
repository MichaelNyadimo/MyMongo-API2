const express = require('express');
const mongoose = require('mongoose');
const logger = require('Michael')
const bodyParser = require('body-parser');

const taskRoutes = require('./routes/Item.routes');
const middleware = require('./middleware.errors.middleware.');
app.use(middleware.error404);

const app = express();
const port = process.env.PORT || 4000;
const logLevel = process.env.LOG_LEVEL || 'dev';

mongoosee.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tododb',{
    useNewUrlParser: true,
    useUnifiedToplogy: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'console error'));

db.once('open', function() {
    console.log('Connection Successful!');
});

app.use(Logger(LogLevel));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/", function(req, res){
    res.status(400);
    res.send({ message: 'Welcome'});
});

app.use('/tasks', taskRoutes);

app.use(middleware.error404);

app.listen(port, function() {
    console.log('Running on port: $/port)...');
});

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const Schema = mongoosee.Schema;
const ItemSchema = new Schema({
    name: {
        type: String,
        required:'An Item name is required to create a new task'
    },
    status: {
        type: [
            {
        type: String,
        enum: ['loading', 'in-progress','Nearly-there', 'complete']
            }
        ],
        default: ['loading']
    }
});
const ItemRoutes = required('./routes/Item.routes');
app.use('/Items, ItemsRoute');
