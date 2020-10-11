const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

/*app.get('/profile',(req, res) =>{
    res.send("<h1>My Portfolio</h1>");
}); */
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine','hbs');

app.use('/',router);
app.use(express.static(path.join(__dirname,'public')));

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  