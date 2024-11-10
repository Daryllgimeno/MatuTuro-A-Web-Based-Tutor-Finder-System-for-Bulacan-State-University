const express = require('express');
const app = express();
const PORT = 4000;

// Set the views directory and the view engine (EJS)
app.set('views', __dirname + '/views'); // Make sure the "views" folder is in the root of your project
app.set('view engine', 'ejs');

// Define your route
app.get('/', (req, res) => {
    res.render('home'); // This will render home.ejs
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
