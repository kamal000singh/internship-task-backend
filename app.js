const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const http = require('http');
const cors = require('cors');
const port = process.env.PORT || 8080;

const app = express();

/**
 * Get port from environment and store in Express.
 */

app.set('port', port);
app.use(cors());
const server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/adduser', require('./routes/addUser'));
app.use('/userlist', require('./routes/userList'));



server.listen(port, () => {
  console.log(`listening port on ${port}`);
});
