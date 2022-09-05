const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 6600;
// offline
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
// offline
const CONNECTION_STRING = "mongodb://localhost:27017/colab";
// online
// const CONNECTION_STRING = "mongodb+srv://mycolab8project:Colab888@cluster0.diclp.mongodb.net/colab";

mongoose.connect(CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('open', () => console.log('Mongo Running'));
mongoose.connection.on('error', (err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// offline
app.use(cors());
app.use(routes);

app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
	res.send("this is index route for endpoints, welcome to your colab project endpoints")
});

app.listen(PORT);
console.log('App is running on port:' + PORT);