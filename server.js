// const express = require('express');
// const apiRoutes = require('./Develop/routes/apiRoutes');
// const htmlRoutes = require('./Develop/routes/htmlRoutes');

// // Creating port and starting server
// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'))

// //Use routes information
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// //Listening port
// app.listen(PORT, () =>
//     console.log(`Server available at http://localhost:${PORT}`)
// );

// --------------------------------------------------------

const express = require('express');
const path = require('path');
const html = require('./Develop/routes/htmlRoutes.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', html);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);