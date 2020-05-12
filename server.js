if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express'); 
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');

app.set('view engine', 'ejs'); // sets the view engine to ejs
app.set('views', __dirname + '/views'); // sets where the veiw files are located
app.set('layout', 'layouts/layout'); // sets up where the layout files are stored so it could be used to import the body of other files to be used with its default layout
app.use(expressLayouts);
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
useNewUrlParser: true }) 
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.use('/', indexRouter); // at this route "/" use this middleware (indexRoutes)
app.use('/authors', authorsRouter); // everything starting with this route (/authors) will use these middleware (authorsRouter)

app.listen(process.env.PORT || 3000);