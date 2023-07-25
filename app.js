import express from 'express';

// Set up Express app
const app = express();

// Listen for requests
app.listen(3000);

// Register View Engine (EJS)
app.set('view engine', 'ejs');

// Render a view
app.get('/', (req, res) => {
  res.render('index');
});
