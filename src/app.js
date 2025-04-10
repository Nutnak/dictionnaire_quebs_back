const mongoose = require('mongoose');
const dotenv = require('dotenv');
const definitionRoutes = require('./routes/definition');
const express = require('express');

const app = express();
const port = 3000; 

app.use(express.json());
app.use(express.urlencoded({extended: false}));

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log('MongoDB connected');
}
).catch((err) => {
    console.log('MongoDB connection error:', err);
}
);



app.get('/', (req, res) => {
  res.send('Hello homepage!');
});

app.use("/definition", definitionRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}
);