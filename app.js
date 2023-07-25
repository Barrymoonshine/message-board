import express from 'express';

// Set up Express app
const app = express();

// Listen for requests
app.listen(3000);

// Middleware & static files
app.use(express.static('public'));

// Register View Engine (EJS)
app.set('view engine', 'ejs');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

// Render views
app.get('/', (req, res) => {
  res.render('index', { title: 'Messages', messages });
});

// Encode Post data on the req object
app.use(express.urlencoded({ extended: true }));

app.get('/new', (req, res) => {
  res.render('new', { title: 'New Message' });
});

app.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect('/');
});
