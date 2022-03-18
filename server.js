const mongoose = require("mongoose");
const express = require("express");
const app = express();
// const PORT = 6600;
const cors = require('cors');
const port = process.env.PORT || 3000;
const routes = require('./routes');
const path = require('path');

// const CONNECTION_STRING = "mongodb://localhost:27017/colab";
const CONNECTION_STRING = "mongodb+srv://mycolab8project:Colab888@cluster0.diclp.mongodb.net/colab";

mongoose.connect(CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('open', () => console.log('Mongo Running'));
mongoose.connection.on('error', (err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

// app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send("this is index route for endpoints, welcome to your colab project endpoints")
});

// app.listen(PORT);
// console.log('App is running on port:' + PORT);

app.listen(port, () => {
    console.log(`listening on port ${port} ...... `);
});
