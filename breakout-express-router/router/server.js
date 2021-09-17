require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const db = require('./db/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

const productRouter = require('./routes/product-router');
const blogpostRouter = require('./routes/blogpost-router');

app.use('/products', productRouter);
app.use('/blogposts', blogpostRouter(db));

// const blogpostRouterObj = blogpostRouter(db);
// app.use('/blogposts', blogpostRouterObj);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
