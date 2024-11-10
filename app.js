const express = require('express');
const path = require('path');
const app = express();
const PORT = 4001;

// Set the views directory and the view engine (EJS)
app.set('views', path.join(__dirname, 'views')); // Ensure the views folder is set correctly
app.set('view engine', 'ejs');

// Serve static files (CSS, images, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); // This allows Express to serve static files

// Define your route
app.get('/', (req, res) => {
    res.render('home'); // This will render home.ejs
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
