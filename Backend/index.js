const express=require('express');
const cors=require('cors');
const dotenv=require("dotenv");
const bookRoute=require('./routes/bookRoutes');
const authRoute=require('./routes/authRoutes');
const bodyParser = require('body-parser');
const path = require('path');
require('./db');
const app=express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
const allowedOrigins = [
  'http://localhost:3000',             
  'https://myfrontend.onrender.com'   
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true); 
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type','Authorization']
}));

const MyBooks = require('./books/books');
app.get('/api/Logicbooks', (req, res) => {
    res.json(MyBooks);
   
  });

app.use('/books', express.static(path.join(__dirname, 'books')));
  app.get('/api/Logicbooks/:id', (req, res) => {
    const Mybook = MyBooks.find(a => a.id === req.params.id);
    if (Mybook) {
      res.json(Mybook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  });
app.use('/api/books',bookRoute);
app.use('uploads',express.static('uploads'));
app.use('/api/auth',authRoute);

const port=process.env.PORT||5000;
app.listen(port,()=>console.log(`Listening on port ${port}`));

