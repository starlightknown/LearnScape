//External Packages import
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression');
const cors = require('cors');

//Internal Files and module imports
const projectRoutes = require('./routes/projectRoutes');
const globalErrorHandler = require(path.join(__dirname,'./controllers/errorController.js'));
const appError = require(path.join(__dirname, './utils/appError.js'));

//Assigining and middleware hooks
const app = express();

app.use(cors());
app.options('*', cors()); //will allow for all routes
//or if for specific route then
// app.options('/api/v1/tours/:id', cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(helmet());

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

//Rate limiter
const limiter = rateLimit({
  max: 100,
  windowMs: 60*60*1000,
  message: 'Too many request from this IP please try again later after an hour'
});
app.use('/api', limiter);

//External Middleware
app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp({
  whitelist: [
    'duration',
    'ratingQuantity',
    'ratingAverage',
    'maxGroupSize',
    'difficulty',
    'price'
  ]
})); 

app.use(compression());

app.use('/api/v1/projects', projectRoutes);

app.all('*', (req, res, next) => {
  next(new appError(`${req.originalUrl} was not found on the server. Please check the Url :D`));
});

app.use(globalErrorHandler);

//Exporting the module
module.exports = app;