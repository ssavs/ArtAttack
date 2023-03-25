const express = require('express');
// route
const route = require('./controller/index');
// cors
const cors = require('cors');
// port
const port = parseInt(process.env.PORT) || 4000;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling.js');
// 
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
    app.use(
    cors(),
    cookieParser(),
    bodyParser.json(),
    express.json(),
    express.urlencoded({extended: false})
)
//Home or /
route.get("^/$|/backend", (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'./view/index.html'));
})

app.listen(port,() =>{
    console.log('Server is running at 4000')
});

app.use(errorHandling);