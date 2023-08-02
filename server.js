const express = require('express');
const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');

// Creating port and starting server
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
//Use routes information
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

//Listening port
app.listen(PORT, () =>
    console.log(`Server available at http://localhost:${PORT}`)
);