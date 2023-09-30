require('dotenv').config();

const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/about', (req, res) => {
    res.send('About page');
    }
);

app.get('/login', (req, res) => {
    res.send('<h1>Login page</h1>');
    }
);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
    }
);