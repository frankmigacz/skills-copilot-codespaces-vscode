// Create web server
const express = require('express');
const app = express();
const PORT = 3000;
//import comments data
const comments = require('./comments.json');

//create route
app.get('/comments', (req, res) => {
    res.json(comments);
});

//start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});